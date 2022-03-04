
class formUser {

    paragraphText = '//*[@id="account_add_address_form"]/p'
    buttonRegister = '#add_address_button'
    firtName = '//*[@id="account_address_fname"]'
    lastName = '//*[@id="account_address_lname"]'
    addressLine = '//*[@id="account_address_address1"]'
    cityTown = '//*[@id="account_address_city"]'
    county = '//*[@id="shipping_county"]'
    codeZip = '//*[@id="shipping_postcode"]'
    telephone = '//*[@id="account_address_telephone"]'

    validateFormUser() {
        cy.xpath(this.paragraphText).then(($btn) => {
            const lblParagraphText = $btn.text()
            expect('To complete registration, please enter your default shipping address').to.eql(lblParagraphText)

            cy.get(this.buttonRegister).then(($btn) => {
                const txtButtonRegister = $btn.text()
                expect('Register').to.eql(txtButtonRegister)
            })

        })
    }
    newRegisterFormUser(firtNames, lastnames, addressLines, cityTownn, countyy, codeZipp, telephonee) {

        cy.xpath(this.firtName).type(firtNames)
        cy.xpath(this.lastName).type(lastnames)
        cy.xpath(this.addressLine).type(addressLines)
        cy.xpath(this.cityTown).type(cityTownn)
        cy.xpath(this.county).type(countyy)
        cy.xpath(this.codeZip).type(codeZipp)
        cy.xpath(this.telephone).type(telephonee)

    }

}

export default formUser