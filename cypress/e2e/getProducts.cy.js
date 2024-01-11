describe('seach by case tests', () => {
    before(() =>{
        //Get token
      cy.authLogin();
      
      
    });
    it('getProducts store', () => {
        
    //Seach Product
    cy.getProduct();
    })
    it('forbidden request', () =>{
      cy.productFail();
    })
})