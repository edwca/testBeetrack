
class organicChallengePage {

    txtBienvenida = '//*[@id="header1_welcome_message"]/span[2]'
    paragraphSection = '//*[@id="browse_category_header_title"]/span'
    linkValidate ='//*[@id="details_breadcrumb_list"]/ul/li[2]/a'
    nameProduct = '//*[@id="browse_products_container"]/article[2]/div/div[1]/a'

    validateOrganicChallengePage() {

        cy.xpath(this.txtBienvenida).then(($btn) => {
            const txtMessageWelcome = $btn.text()
            expect(' Organic Challenge').to.eql(txtMessageWelcome)

            cy.xpath(this.paragraphSection).then(($btn) => {
                const txtParagraphSection = $btn.text()
                expect('Organic Vegetables').to.eql(txtParagraphSection)
            })
            cy.xpath(this.linkValidate).then(($btn) => {
                const txtLinkValidate = $btn.text()
                expect('Organic Vegetables').to.eql(txtLinkValidate)
            })
            cy.xpath(this.nameProduct).then(($btn) => {
                const txtNameProduct = $btn.text()
                expect('Lettuce').to.eql(txtNameProduct)
            })

        })

    }
}

export default organicChallengePage