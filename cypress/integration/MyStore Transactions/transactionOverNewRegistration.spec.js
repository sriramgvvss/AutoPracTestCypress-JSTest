//This script is written to test the end to end flow of a product purchase transaction by registering a new user

describe("Product Transaction with a new user registration", ()=>{

    it('Navigate to Automationpractice.com Store Page', ()=>{
        cy.visit('http://automationpractice.com/index.php')
    }) 
    
      
    it("Making a product purchase by registering a new user", ()=>{

        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').focus() 
        cy.contains('Evening Dresses').click({ force: true }) 
         
           
       cy.get('#center_column').within(($form) =>{
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .lnk_view > span').click()
       })

        cy.get('form[id=buy_block]').within(($form) =>{
        cy.get('#group_1').select('L')
        cy.get('#color_7').click()
        cy.get('.exclusive > span').click()
       })
    
       cy.get('.button-medium > span').click()

       cy.get('#center_column').within(($form) =>{
       cy.get('.cart_navigation > .button > span').click()
       })

        cy.get('#create-account_form').within(($form) =>{
        cy.get('#email_create').type("testemail1@testemail1.com")
        cy.get('#SubmitCreate > span').click()
        })

        cy.get('#account-creation_form').within(($form) =>{
            cy.get('#id_gender1').check()
            cy.get('#customer_firstname').type("Testemail1FN")
            cy.get('#customer_lastname').type("Testemail1LN")
            cy.get('#passwd').type("testemail1")
            cy.get('#newsletter').check()
            cy.get('#optin').check()
            

            cy.get('#days').select("12")
            cy.get('#months').select("December")
            cy.get('#years').select("1980")
       

            cy.get('#firstname').clear().type("testemailFN")
            cy.get('#lastname').clear().type("testemailLN")
            cy.get('#company').type("testemail company")
            cy.get('#address1').type("testemail address")
            cy.get('#address2').type("testemail address 2")
            cy.get('#city').type("city")
            cy.get('#id_country').select("United States")
            cy.get('#id_state').select("Alabama")
            cy.get('#postcode').type("50006")
            cy.get('#other').type("other")
            cy.get('#phone').type("1234556789")
            cy.get('#phone_mobile').type("987654321")
            cy.get('#alias').clear().type("Home Address")
            cy.get('#submitAccount > span').click()
        

        })
        
      cy.get('.cart_navigation > .button > span').click()
      

       cy.get('#center_column').within(($form) =>{
       cy.get('#cgv').check()
       cy.get('.cart_navigation > .button > span').click()
       })

       cy.get('#center_column').within(($form) =>{
       cy.get('.cheque').click()
        })

        cy.get('#center_column').within(($form) =>{
        cy.get('#cart_navigation > .button > span').click()
        }) 

        
        cy.screenshot()
    
        cy.get('.logout').click()
        
    })
})
