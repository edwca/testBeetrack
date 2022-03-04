
class loginUser {

    buttonLogin = '//*[@id="account_login_register_button_register"]'
    ButtonBack = '//*[@id="aspnetForm"]/main/div/div[1]/a'
    LabelTitleH1 = '//*[@id="welcome"]'
    LabelTitleH2 = '//*[@id="account_login_register"]/h2'
    LabelForgotten ='//*[@id="account_login_register"]/div/div[4]/div[2]/a[1]'

    validateLoginUser() {

        // validación de elementos web visibles en la vista
        cy.xpath(this.buttonLogin).then(($btn) => {
            const txtButtonContinue = $btn.text()
            expect('Continue').to.eql(txtButtonContinue)


            cy.xpath(this.ButtonBack).should(($btn2) => {
                const txtButtonBack = $btn2.text()
                expect(' Back to Store').not.to.eq(txtButtonBack)
            })

            cy.xpath(this.LabelTitleH1).should(($title) => {
                const txtLabelTitleH1 = $title.text()
                expect('Login or Register').to.eq(txtLabelTitleH1)
            })
            cy.xpath(this.LabelTitleH2).should(($title) => {
                const txtLabelTitleH2 = $title.text()
                expect('Your Email').to.eq(txtLabelTitleH2)
            })

            cy.xpath(this.LabelForgotten).should(($title) => {
                const txtLabelForgotten = $title.text()
                expect('Forgotten Password?').to.eq(txtLabelForgotten)
            })

        })

    }
}

export default loginUser