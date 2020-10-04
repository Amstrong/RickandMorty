describe("Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/characters");
  });

  it("Recognize input", () => {
    cy.get(".input-character");
  });

  it("Click the filter female", () => {
    cy.contains("Female").click();
  });

  it("Accepts input", () => {
    const input = "Summer Smith";
    cy.get(".input-character").type(input).should("have.value", input);
  });
});
