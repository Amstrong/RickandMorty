describe("Request", () => {
  it("displays random users from API", () => {
    cy.request("https://rickandmortyapi.com/api/character?page=1").should(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response).to.have.property("headers");
        expect(response).to.have.property("duration");
      }
    );
  });
});
