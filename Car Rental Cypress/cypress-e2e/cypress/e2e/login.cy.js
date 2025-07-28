describe('Luồng đăng nhập và chuyển đổi tài khoản', () => {
  it('Đăng nhập bằng admin, sau đó logout và login bằng user khác', () => {
    // Bước 1: Truy cập trang chủ
    cy.visit('http://localhost:4200');

    // Bước 2: Vào trang login và đăng nhập admin
    cy.contains('Login').click();
    cy.url().should('include', '/login');

    cy.get('input[formControlName="email"], input#email, input[name="email"]')
      .clear()
      .type('admin@test.com');
    cy.get('input[formControlName="password"], input#password, input[name="password"]')
      .clear()
      .type('admin');
    cy.get('button[type="submit"], button').contains(/log in/i).click();

   
    // Bước 3: Logout
    cy.contains('Logout').click();
    // Sau khi logout, ứng dụng có thể tự chuyển về trang home hoặc login
    // Ở đây giả định redirect về /login
    cy.url().should('include', '/login');

    // Bước 4: Đăng nhập lại với tài khoản khác
    cy.get('input[formControlName="email"], input#email, input[name="email"]')
      .clear()
      .type('yuwantha@gmail.com');
    cy.get('input[formControlName="password"], input#password, input[name="password"]')
      .clear()
      .type('12345');
    cy.get('button[type="submit"], button').contains(/log in/i).click();

   
  });
});