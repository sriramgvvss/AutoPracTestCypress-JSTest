//This script is written to test the end to end flow of a product purchase transaction using an existing user
//Registered User details: emailid: test@test22.com, password: Test22

describe("Product Transaction with an existing user", ()=>{

    it('Navigate to Automationpractice.com Store Page', ()=>{
        cy.visit('http://automationpractice.com/index.php')
    }) 
    
      
    it("Making a product purchase using registered user", ()=>{

        
        cy.get('nav').contains('Sign in').click()
        
        
        cy.get('form[id=login_form]').within(($form) =>{
        cy.get('input[name=email]').type("test@test22.com")
        cy.get('#passwd').type("Test22")
        cy.get('#SubmitLogin > span').click()
        })

       cy.wait(5000)
       cy.get('#search_query_top').type("dress")
       cy.get('#searchbox > .btn').click()
     
       cy.get('#center_column').within(($form) =>{
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .lnk_view > span').click()
       })

        cy.get('form[id=buy_block]').within(($form) =>{
        cy.get('#group_1').select('M')
        cy.get('#color_11').click()
        cy.get('.exclusive > span').click()
       })
    
       cy.get('.button-medium > span').click()

       cy.get('#center_column').within(($form) =>{
       cy.get('.cart_navigation > .button > span').click()
       })

       cy.get('#center_column').within(($form) =>{
       cy.get('.cart_navigation > .button > span').click()
       })

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
