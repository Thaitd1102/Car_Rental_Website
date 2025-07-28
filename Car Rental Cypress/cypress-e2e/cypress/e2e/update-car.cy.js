

describe('Luồng chỉnh sửa xe (Update Vehicle)', () => {
  before(() => {
    // 1. Truy cập trang chủ và login với admin
    cy.visit('http://localhost:4200');
    cy.contains('Login').click();
    cy.url().should('include', '/login');

    cy.get('input[formControlName="email"], input#email, input[name="email"]')
      .clear()
      .type('admin@test.com');
    cy.get('input[formControlName="password"], input#password, input[name="password"]')
      .clear()
      .type('admin');
    cy.get('button[type="submit"], button').contains(/log in/i).click();

  
  });

 it('Chọn Update trên thẻ Honda Fit', () => {
    // 1. Đảm bảo thẻ xe hiển thị
    cy.contains('HONDA - Honda Fit').should('be.visible');

    // 2. Lấy đúng container của thẻ đó rồi click Update
    cy.contains('HONDA - Honda Fit')
      .closest('.card')          // hoặc '.vehicle-card', tuỳ class bạn dùng
      .within(() => {
        cy.contains('Update').click();
         // 3. Đảm bảo đang ở trang edit (vd. URL chứa /vehicles/edit)
    cy.url().should('include', 'car/1/edit');
      });
      
 it('Sửa thông tin và lưu lại', () => {
    // Thay Name
    cy.get('input[formControlName="name"]')
      .should('exist')        // đảm bảo tồn tại trước khi clear/type
      .clear()
      .type('Honda Fitness');

    // Thay Color
    cy.get('input[formControlName="color"]')
      .should('exist')
      .clear()
      .type('Red');

    // Thay Model Year (có thể là formControlName="modelYear" hoặc "yearOfManufacture")
    cy.get('input[formControlName="modelYear"]')
      .should('exist')
      .clear()
      .type('2021');

    // Thay Price (theo formControlName thực tế, ví dụ "pricePerDay" hoặc "price")
    cy.get('input[formControlName="pricePerDay"]')
      .should('exist')
      .clear()
      .type('25');

    // Thay Description
    cy.get('textarea[formControlName="description"]')
      .should('exist')
      .clear()
      .type(
        'The Honda Fitness combines urban agility with modern style. ' +
        'This 2021 edition features a striking red finish, reliable Hybrid engine, ' +
        'and upgraded interior comforts for a fun, economical drive.'
      );

    // Lưu thay đổi
    cy.contains('button', 'Update').click();

    // Xác thực backend trả về 200 và UI đã cập nhật
    cy.intercept('PUT', '/api/vehicles/*').as('updateVeh');
    cy.wait('@updateVeh').its('response.statusCode').should('eq', 200);

    // Về listing để kiểm tra giá trị mới
    cy.url().should('include', '/vehicles');
    cy.contains('Honda Fitness').should('be.visible');
    cy.contains('Red').should('be.visible');
    cy.contains('2021').should('be.visible');
    cy.contains('Rs.25').should('be.visible');
  });
  // Lưu thay đổi
    cy.contains('button', 'Update').click();
    });
});
