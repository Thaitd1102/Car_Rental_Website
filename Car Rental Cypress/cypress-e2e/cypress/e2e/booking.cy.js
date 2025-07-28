

describe('Luồng đăng nhập và đặt xe', () => {
  before(() => {
    // Chạy trước 1 lần: mở ứng dụng, login user yuwantha
    cy.visit('http://localhost:4200');
    cy.contains('Login').click();
    cy.url().should('include', '/login');

    cy.get('input[formControlName="email"], input#email, input[name="email"]')
      .clear()
      .type('yuwantha@gmail.com');
    cy.get('input[formControlName="password"], input#password, input[name="password"]')
      .clear()
      .type('12345');
    cy.get('button[type="submit"], button').contains(/log in/i).click();

    // Xác nhận đã login thành công
    cy.url().should('not.include', '/login');
  });

  it('Chọn "Book This Car" trên thẻ Honda Fit', () => {
    // Đảm bảo thẻ xe đã hiển thị
    cy.contains('HONDA - Honda Fit').should('be.visible');

    // Trong vùng chứa tiêu đề Honda Fit, nhấn nút Book This Car
    cy.contains('HONDA - Honda Fit')
      .parents('.card, .vehicle-card')    // điều chỉnh selector cho đúng với DOM của bạn
      .within(() => {
        cy.contains('Book This Car').click();
      });

cy.get('input[formControlName="fromDate"]')
  .invoke('removeAttr', 'type')   // loại bỏ type="date"
  .type('20072025')
  .blur();

cy.get('input[formControlName="toDate"]')
  .invoke('removeAttr', 'type')

  .type('25072025')
  .blur();

cy.contains('Book Car').click();

   
  });
  it('Kiểm tra ảnh ', () => {
  cy.get('img[alt="Car Image"]') // hoặc sửa selector phù hợp nếu dùng khác
    .should('be.visible')
    .and(($img) => {
      // Kiểm tra xem ảnh có load thành công không bằng thuộc tính naturalWidth
      expect($img[0].naturalWidth, 'Ảnh không load được').to.be.greaterThan(0);
    });
});

});
