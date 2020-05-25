describe("Tests authentication", () => {
  it("Can sign up", () => {
    cy.visit("http://localhost:3001/signup");

    cy.get('[data-testid="username"]').type("example");

    cy.get('[data-testid="password"]').type("password");

    cy.get('[data-testid="avatar"]').type("http://some-image.com");

    cy.get('[data-testid="finishSignUpButton"').click();

    cy.location("pathname").should("eq", "/login");
  });

  it("Can login and logout", () => {
    cy.visit("http://localhost:3001/login");

    cy.get('[data-testid="username"').type("example");

    cy.get('[data-testid="password"').type("password");

    cy.get('[data-testid="finishLoginButton"').click();

    cy.get('[data-testid="logout"').click();
    cy.location("pathname").should("eq", "/login");

    cy.visit("http://localhost:3001/app/board");
    cy.location("pathname").should("eq", "/login");
  });
});
