class GooglePage {
  elements = {
    consentButton: () => cy.contains("Zgadzam się"),
    searchInput: () => cy.get("[aria-label='Szukaj']"),
  };

  typeSearch(searchText: string) {
    this.elements.searchInput().type(searchText);
  }
}

export default new GooglePage();
