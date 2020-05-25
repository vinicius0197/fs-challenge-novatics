describe("Tests my kudos", () => {
  it("Can find My Kudos page", () => {
    cy.visit("http://localhost:3001/login");

    cy.get('[data-testid="username"').type("example");

    cy.get('[data-testid="password"').type("password");

    cy.get('[data-testid="finishLoginButton"').click();

    cy.get('[data-testid="mykudos"').click();

    cy.get("h1").contains("Meus kudos").should("be.visible");
  });
});
