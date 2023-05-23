describe('Ajout de compte et test API', function() {
  const users = [
    { nom: 'Mithridate', prenom: 'Mathieu', mail: 'pate@terrine.veau', password: 'VoilaUnMDp01', cas: 1 },
    { nom: 'Mithridate2', prenom: 'Mathieu2', mail: 'pate2@terrine.veau', password: 'VoilaUnMDp02', cas: 2 },
    { nom: 'Mithridate3', prenom: 'Mathieu3', mail: 'pate3@terrine.veau', password: 'VoilaUnMDp03', cas: 3 },
    { nom: 'Mithridate4', prenom: 'Mathieu4', mail: 'pate4@terrine.veau', password: 'VoilaUnMDp04', cas: 4 },
    { nom: 'Mithridate5', prenom: 'Mathieu5', mail: 'pate5@terrine.veau', password: 'VoilaUnMDp05', cas: 5 },
  ];

  users.forEach(user => {
    it(`insertUser ${user.cas}`, () => {
      cy.visit('http://localhost/cypress/addUser')
      cy.get(':input[name="nom"]').type(user.nom)
      cy.get(':input[name="prenom"]').type(user.prenom)
      cy.get(':input[name="mail"]').type(user.mail)
      cy.get('[type="password"]').type(user.password)
      cy.get(':input[name="submit"]').click()

      cy.get('#msgzone').should('contain', "Le compte a été ajouté en BDD").then(() => {
        cy.request({
          method: 'POST',
          url: 'cypress/api/addTest', 
        })
      })
    })
  })

  users.forEach(user => {
    it(`doublonUser ${user.cas}`, () => {
      cy.visit('http://localhost/cypress/addUser')
      cy.get(':input[name="nom"]').type(user.nom)
      cy.get(':input[name="prenom"]').type(user.prenom)
      cy.get(':input[name="mail"]').type(user.mail)
      cy.get('[type="password"]').type(user.password)
      cy.get(':input[name="submit"]').click()

      cy.get('#msgzone').should('contain', "Les informations sont incorrectes").then(() => {
        cy.request({
          method: 'POST',
          url: 'cypress/api/addTest',
        })
      })
    })
  })

  it('vide', () => {
    cy.visit('http://localhost/cypress/addUser')
    cy.get(':input[name="mail"]').type('pate@terrine.veau')
    cy.get(':input[name="submit"]').click()
    cy.get('#msgzone').should('contain', "Veuillez remplir tous les champs du formulaire").then(() => {
      cy.request({
        method: 'POST',
        url: 'cypress/api/addTest',
      })
    })
  })
})
