import homePage from '../Po/homePage'
import loginUser from '../Po/loginUser'
import formUser from '../Po/formUser'
import accountPage from '../Po/accountPage'
import itemPage from '../Po/itemsPageTomatoes'
import organicChallengePage from '../Po/OrganicChallengePage'
import itemsPageLetucce from '../Po/itemsPageLetucce'
import orderPageCheckout from '../Po/orderPageCheckout'

describe('Casos de prueba Organic Challenge', () => {

  // Creo nueva instancia de loginPage
  const hp = new homePage()
  // Creo nueva instancia de loginPage
  const lu = new loginUser()
  // Creo nueva instancia de formUser
  const fu = new formUser()
  // Creo nueva instancia de accountPage
  const ap = new accountPage()
  // Creo nueva instancia de itemsPage
  const ip = new itemPage()
  // Creo nueva instancia de organicChallengePage
  const op = new organicChallengePage()

  // Creo nueva instancia de organicChallengePage
  const ipl = new itemsPageLetucce()

   // Creo nueva instancia de organicChallengePage
   const opc = new orderPageCheckout()

  const inputMail = '#account_login_register_email'
  const inputPass = '#account_login_register_login_password'
  const checkLogin = '#account_login_register_which_login > .checkbox'
  const buttonLogin = '#account_login_register_button_login'
  const returnHome = '.account_buttons > [href="https://automationstore.onlineweb.shop"]'
  const labelMyAccount = '//*[@id="account"]/a/span'
  const itemProduct = '.browse_product_item_image_container > .browse_product_item_image'
  const validateItemCant ='//*[@id="txtQty"]'
  const buttonAddToCard = '#details_buy_button'
  const processCheckout ='.success'
  const checkOut = '#basket_purchase_main'
  const AddAddress ='.saved_address_item_select'
  const continuePayments='#btnConfirmShipping > .button'
  const termsAndCondition = '.payment_terms_checkbox'
  const payBayCach ='.payment_item_toggle'
  const completeOrder ='#paybyother_74jpMc > .payment_item_redirect > .button_container > .button'
  const quitCapha = '.selected_shipping_address_code'

  // Comienzo test
  before(() => {
    cy.log('Comenzando la prueba');
  });

  beforeEach(() => {
    // Ingreso a sitio
    cy.visit('/')
    // click SigIN
    cy.get('#account').click()
    cy.wait(2000)

  })

  after(() => {
    cy.log('Termino Bloque bloque de prueba');
  });

  afterEach(() => {
    
    cy.log('Test completado correctamente');
  });

  it('Comprar de producto con usuario registrado', () => {
    // Cargo data de prueba con faker
    cy.fixture('dataAutomationStore/usersData.json').then((data) => {
      // Cargo la data  email
      cy.get(inputMail).type(data.users[0].Email)
      // Clik en elemento ckeck Login to your Account 
      cy.get(checkLogin).click()
      // Cargo la data  pass
      cy.get(inputPass).type(data.users[0].Pass)
      // CLick button Login
      cy.get(buttonLogin).click()
      cy.wait(2000)
      // Vuelvo al home
      cy.get(returnHome).click()
      cy.wait(2000)
      // Valido My Account
      cy.xpath(labelMyAccount).should('contain', 'My Account')
      // Ingreso a Store
      hp.storeItems()
      cy.wait(2000)
      op.validateOrganicChallengePage()
      // click product Letucce
     cy.get(itemProduct).click()
     // validate Page Product Letucce
     ipl.validateItemPage()
     // unidades a comprar
     ipl.addUnitsToPurchase(1)
     // validar unidades a comprar
     cy.xpath(validateItemCant).should('have.value','2')
     cy.get(buttonAddToCard).click()
     cy.get(processCheckout).click()
     cy.get(checkOut).click()
     cy.get(AddAddress).click()
     cy.get(continuePayments).click()
     cy.get(termsAndCondition).click()
     cy.get(quitCapha).click()
     cy.get(payBayCach).click()
     cy.get(payBayCach).click()
     cy.get(completeOrder).click()
     cy.wait(2000)

     // Validaciones a las orderCheckout
     opc.validateOrderPageCheckout()
    })
  
  
  
  
  })
});
