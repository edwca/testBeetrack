class accountPage {

    messageWelcome = '//*[@id="account_home"]/div[1]/p'

    validateAccountPage(){
         // validación mensaje de bienvenida
      cy.xpath(this.messageWelcome).should(($message) => {
        const txtParragoBienvenida = $message.text()
        expect('Welcome to your account. Use the menu below to navigate around your account, view your orders, update your address or send us a message.')
          .to.eq(txtParragoBienvenida)
      })
    }
}
export default accountPage