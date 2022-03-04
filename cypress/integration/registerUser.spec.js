import homePage from '../Po/homePage'
import loginUser from '../Po/loginUser'
import formUser from '../Po/formUser'
import accountPage from '../Po/accountPage'
import itemPageTomatoes from '../Po/itemsPageTomatoes'
import organicChallengePage from '../Po/OrganicChallengePage'
import itemsPageLetucce from '../Po/itemsPageLetucce'
import orderPageCheckout from '../Po/orderPageCheckout'

describe('Casos de prueba Organic Challenge', () => {
  // Creo nueva instancia de homePage
  const hp = new homePage()
  // Creo nueva instancia de loginPage
  const lu = new loginUser()
  // Creo nueva instancia de formUser
  const fu = new formUser()
  // Creo nueva instancia de accountPage
  const ap = new accountPage()
  // Creo nueva instancia de itemsPage
  const ip = new itemPageTomatoes()
   // Creo nueva instancia de organicChallengePage
   const op = new organicChallengePage()
 // Creo nueva instancia de itemsPageLetucce
 const ipl = new itemsPageLetucce()
 // Creo nueva instancia de orderPageCheckout
   const opc = new orderPageCheckout()

  const inputMail = '#account_login_register_email'
  const inputPass = '#account_login_register_login_password'
  const inputPassRegister = '#account_login_register_register_password'
  const checkLogin = '#account_login_register_which_login > .checkbox'
  const checkCreateUser = '#account_login_register_which_register > .checkbox'
  const btnContinuar = '#account_login_register_button_register'
  const buttonLogin = '#account_login_register_button_login'
  const returnHome = '.account_buttons > [href="https://automationstore.onlineweb.shop"]'
  const labelMyAccount = '//*[@id="account"]/a/span'
  const resultSearchItems = '#browse_search_results'
  const resultSearhImage = '.browse_product_item_image'
  const messageWhishLits = '#wishlist_logged_in_html > a > strong'
  const messageRemoveWhishList = '#wishlist_added_html > a > strong'
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
    // Genero data de prueba
    cy.generaDataUsers()
  });

  beforeEach(() => {
    // Ingreso a sitio
    cy.visit('/')

    // valido Home de la pagina
    hp.validatehomePage()
    cy.wait(2000)
    // click SigIN
    cy.get('#account').click()
    cy.wait(2000)

    // valido vista Home de la Login or Register
    lu.validateLoginUser()
    cy.wait(2000)

    // valido vista formulario
    fu.validateFormUser()
    cy.wait(2000)
  })

  after(() => {
    cy.log('Termino Bloque bloque de prueba');
  });

  afterEach(() => {
    cy.log('Test completado correctamente');
  });

  it('Registro de usuario', () => {
    // Cargo data de prueba con faker
    cy.fixture('dataAutomationStore/usersData.json').then((data) => {
      // Cargo la data  email
      cy.get(inputMail).type(data.users[0].Email)
      // Clik en elemento ckeck Create User
      cy.get(checkCreateUser).click()
      // Cargo la data  pass
      cy.get(inputPassRegister).type(data.users[0].Pass)
      //Valido mensaje de salida post promp al presionar registrarse
      cy.get('.account_login_register_which_register_prompt')
        .should('contain', 'Register an account to keep track of your orders and gain access to additional store features.')
      // Presiono en boton continuar
      cy.get(btnContinuar).click()
      cy.wait(3000)
      // LLamo al metodo registrar nuevo usuario
      fu.newRegisterFormUser(
        data.users[0].FirstName,
        data.users[0].LastName,
        data.users[0].AddressLine1,
        data.users[0].CityTown,
        data.users[0].County,
        data.users[0].PostZipCode,
        data.users[0].Telephone
      )
      // click en confirmar registro
      cy.get('#add_address_button').click()
      cy.wait(3000)
      // validación mensaje de bienvenida
      cy.get('#welcome > [data-lang="true"]').should('contain', 'Welcome')
      ap.validateAccountPage()
      cy.clearLocalStorageCache()
    })
  })

  it('Creando la WhishList', () => {
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
      // Valido vista de users
      ap.validateAccountPage()
      cy.wait(2000)
      // Vuelvo al home
      cy.get(returnHome).click()
      // Valido My Account
      cy.xpath(labelMyAccount).should('contain', 'My Account')
      cy.wait(2000)
      // item a buscar
      hp.searchItems('Tomatoes')
      // validar texto en resultados
      cy.get(resultSearchItems).should('contain', 'product(s) found for "Tomatoes"')
      cy.get(resultSearhImage).click()
      ip.validateItemPage()
      cy.wait(3000)

      //Validar mensaje de salida en whislist
      cy.get(messageWhishLits).should('contain', 'Add To Wishlist')
      //Add to WhishList
      ip.addToWhishList()
      cy.wait(3000)
      //Validar mensaje de remove en whislist
      cy.get(messageRemoveWhishList).should('contain', 'Remove From Wishlist')
      //Remover to WhishList
      ip.removeToWhishList()
      cy.get(messageRemoveWhishList).click()
      cy.wait(3000)
    })


  })

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
     cy.get(payBayCach).click()
     cy.get(completeOrder).click()
     cy.wait(2000)

     // Validaciones a las orderCheckout
     opc.validateOrderPageCheckout()
    })
  
  })



});
