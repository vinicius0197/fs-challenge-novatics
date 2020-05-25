describe("Tests timeline", () => {
  it("Can find timeline page", () => {
    cy.visit("http://localhost:3001/login");

    cy.get('[data-testid="username"').type("example");

    cy.get('[data-testid="password"').type("password");

    cy.get('[data-testid="finishLoginButton"').click();

    cy.get('[data-testid="timeline"').click();

    cy.get("h1").contains("Timeline").should("be.visible");
  });
});
