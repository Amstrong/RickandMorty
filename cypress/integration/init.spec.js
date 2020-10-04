describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
  it("visits the app", () => {
    cy.visit("http://localhost:3001");
  });
  it("Click the button", () => {
    cy.contains("Comienza").click();
  });
});
