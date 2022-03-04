require('cypress-xpath')
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

class homePage {

    messageWelcome = '//*[@id="header1_welcome_message"]/span[1]'
    buttonSigIN = '//*[@id="account"]/a/span'
    inputSearch = '//*[@id="txtQuickSearch"]'
    imgTomatoes = '//*[@id="browse_products_container"]/article/a/picture/img'
    storeList = '#header2_inner > #header2_nav > .categories'

    validatehomePage() {
        cy.xpath(this.messageWelcome).then(($btn) => {
            const txtmessageWelcome = $btn.text()
            expect('Welcome to').to.eql(txtmessageWelcome)

            cy.xpath(this.buttonSigIN).then(($btn) => {
                const txtbuttonSigIN = $btn.text()
                expect('Sign In').to.eql(txtbuttonSigIN)
            })

        })
    }
    searchItems(searhItem) {
        cy.get('#search_toggle_button > .fas').click()
        cy.xpath(this.inputSearch).type(searhItem)
        cy.get('.search_container > button').click()
    }
    storeItems(){
        cy.get('#header2_inner > #header2_nav > .categories').realHover()
        cy.contains('Organic Vegetables').click({force: true})
    }
}
export default homePage