import homePage from '../Po/homePage'
import loginUser from '../Po/loginUser'
import formUser from '../Po/formUser'
import accountPage from '../Po/accountPage'
import itemPage from '../Po/itemsPage'

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

  it('Creando la WhishList', () => {
    // Cargo data de prueba con faker
    cy.fixture('dataAutomationStore/usersData.json').then((data) => {
      // Cargo la data  email
      cy.get('#account_login_register_email').type(data.users[0].Email)
      // Clik en elemento ckeck Login to your Account 
      cy.get('#account_login_register_which_login > .checkbox').click()
      // Cargo la data  pass
      cy.get('#account_login_register_login_password').type(data.users[0].Pass)
      // CLick button Login
      cy.get('#account_login_register_button_login').click()
      // Valido vista de users
      ap.validateAccountPage()
      cy.wait(2000)
      // Vuelvo al home
      cy.get('.account_buttons > [href="https://automationstore.onlineweb.shop"]').click()
      // Valido My Account
      cy.xpath('//*[@id="account"]/a/span').should('contain','My Account')
      cy.wait(2000)
      // Click Lupa
      // llamo a que busca los pr
      hp.searchItems('Tomatoes')
      
      
      // validar texto en resultados
      cy.get('#browse_search_results').should('contain','product(s) found for "Tomatoes"')
      cy.get('.browse_product_item_image').click()
      ip.validateItemPage()
      
      //Add to WhishList
      ip.addToWhishList()
      cy.wait(3000)
      //Validar mensaje de salida en whislist
      cy.get('#wishlist_added_html > a > strong').should('contain','Remove From Wishlist')

      // Debo remover la marca al final para que en la nueva ejecución no se quede
      // en memoria como en whilist
      ip.removeToWhishList()
      cy.wait(3000)
      cy.clearLocalStorageCache()
    })
  })

});
