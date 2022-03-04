class itemsPage {

    nameItems = '//*[@id="details_title"]'
    titleProductCode = '//*[@id="details_code"]/strong'
    valueProduct = '//*[@id="ui_price_inc_tax"]'
    buttonAddToCard = '//*[@id="details_buy_button"]'
    buttonAddToChishList = '//*[@id="wishlist_logged_in_html"]/a/strong'
    buttonRemoveToChishList = '//*[@id="wishlist_added_html"]/a/strong'
    buttonIncrement = '//*[@id="details_buy_quantity_buttons"]/button[1]'

    validateItemPage() {

        cy.xpath(this.nameItems).then(($btn) => {
            const txtNameItems = $btn.text()
            expect('Lettuce').to.eql(txtNameItems)

            cy.xpath(this.titleProductCode).then(($btn) => {
                const txtTitleProductCode = $btn.text()
                expect('Product Code').to.eql(txtTitleProductCode)
            })
            cy.xpath(this.valueProduct).then(($btn) => {
                const txtValueProductCode = $btn.text()
                expect('$1').to.eql(txtValueProductCode)

            })

        })
    }
    addUnitsToPurchase(items) {
        
        for (var i = 0; i < items; i++) {
            
            cy.xpath(this.buttonIncrement).click()
        }
        
    }
    


}
export default itemsPage