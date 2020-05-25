describe("Tests kudo board", () => {
  it("Can create a kudo", () => {
    cy.visit("http://localhost:3001/login");

    cy.get('[data-testid="username"').type("example");

    cy.get('[data-testid="password"').type("password");

    cy.get('[data-testid="finishLoginButton"').click();

    cy.get('[data-testid="participantsGrid"] div')
      .first()
      .get('[data-testid="learn-icon"]')
      .first()
      .click();

    cy.get('[data-testid="kudoDescription"').type("This is an example");

    cy.get('[data-testid="finishButton"').click();

    cy.location("pathname").should("eq", "/app/board");
  });
});
