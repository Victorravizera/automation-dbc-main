
// Get healtcheck
Cypress.Commands.add('getTest', () => {
    cy.api({
        method: 'GET',
        url: '/test',
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.status).to.eq('ok')
    })
})

// Get users
Cypress.Commands.add('getUsers', () => {
    cy.api({
        method: 'GET',
        url: '/users',
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})

// Post auth login
Cypress.Commands.add('authLogin', () => {
    cy.api({
        method: 'POST',
        url: '/auth/login',
        body: {
           username: 'kminchelle',
           password: '0lelplR'
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        
        //Get token
        const authToken = response.body.token;
        Cypress.env('accessToken', authToken)
    })
})

// Post products
Cypress.Commands.add('getProduct', () => {
cy.api({
    method: 'GET',
    url: '/auth/products',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cypress.env('accessToken')}`,
    },
    
}).then((response) => {
    expect(response.status).to.eq(200)
})
})

// Get products fail
Cypress.Commands.add('productFail', () => {
    cy.api({
        method: 'GET',
        url: '/auth/products',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cypress.env('accessToke')}`,
        },
        
    }).then((response) => {
        expect(response.status).to.eq(401)
        expect(response.body.name).to.eq('JsonWebTokenError')
        expect(response.body.message).to.eq('Invalid/Expired Token!')
    })
    })

//add products
    Cypress.Commands.add('addProduct', () => {
        cy.api({
            method: 'POST',
            url: '/products/add',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                title: "Perfume Oil",
                description: "Mega Discount, Impression of A...",
                price: 13,
                discountPercentage: 8.4,
                rating: 4.26,
                stock: 65,
                brand: "Impression of Acqua Di Gio",
                category: "fragrances",
                thumbnail: "https://i.dummyjson.com/data/products/11/thumnail.jpg"
            }
            
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
        })

//get products
Cypress.Commands.add('getProduct', () => {
    cy.api({
        method: 'GET',
        url: '/products',
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})

//get products id
Cypress.Commands.add('getId', () => {
    cy.api({
        method: 'GET',
        url: '/products/1',
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})

//get products id fail
Cypress.Commands.add('idFail', () => {
    cy.api({
        method: 'GET',
        url: '/products/0',
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(404)
        expect(response.body.message).to.eq("Product with id '0' not found")
    })
})