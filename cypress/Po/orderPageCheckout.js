class orderPageCheckout{

   
    methotPayment = '//*[@id="checkout_container_other"]/div[1]/div[2]/strong'
    greetingsOrder ='//*[@id="paybyother_74jpMc"]/div[2]/p[1]'
    numberOrder='//*[@id="paybyother_74jpMc"]/div[2]/p[3]/strong/span'

    validateOrderPageCheckout(){
     
      cy.xpath(this.methotPayment).should(($message) => {
        const txtMethotPayment = $message.text()
        expect('Pay by Cash on Delivery')
          .to.eq(txtMethotPayment)
      })
      cy.xpath(this.greetingsOrder).should(($message) => {
        const txtGreetingsOrder = $message.text()
        expect('Thank you!')
          .to.eq(txtGreetingsOrder)
      })
      cy.xpath(this.numberOrder).should(($message) => {
        const txtNumberOrder = $message.text()
        expect(txtNumberOrder).not.to.be.empty
      })
    }
}
export default orderPageCheckout