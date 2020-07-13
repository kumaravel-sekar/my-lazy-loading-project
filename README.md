
# Startup (if using Online IDE)

## Run these commands to get started:

npm run mock-server

## Click Run at the top:

Once app has finished compiling, click the link that shows at the top of terminal.

# Startup (if using Local IDE)

Make sure your versions are these or higher: 

node version: >= 9.8.0
npm version: >= 6.2.0

## Run these commands to get started:

npm i
npm run mock-server
npm start

The mock server endpoints include '/products' which will return you a json of all the products, and '/products/:id', which will return you a json of that specific product.

# Angular Concepts Implemented and tested

1. Meaningful comments
2. Formatting and naming
3. Route has been configured correctly so that when a user clicks on a product link from the landing page, user is navigated to that product with the corresponding route (ie. product/1731002618)
4. Creation of a service to fetch product from /products/:id endpoint using HTTP Client and return as an observable (half marks for using /products endpoint)
5. Implements async pipe for consuming observable (half marks for using .subscribe())
6. Implements at least one dumb or presentational component that does not make use of services for displaying product
7. Makes use of at least two different structural directives to form the DOM
8. Makes use of at least one attribute (property) binding
9. Makes use of string interpolation to display the data

Rxjs / Ngrx / Observables
10. Implements Ngrx Entity for state creation and management
11. Implements at least one Ngrx reducer
12. Implements at least two Ngrx actions
13. Implements at least one Ngrx effect (makes use of created service from #4)
14. Implements "select" operator in an observable to retrieve product from state (half marks for not specifying a product id in selector)
15. Implements the "tap" operator in the observable from #10 to dispatch the GET action (half marks for dispatching action from ngOnInit instead)
16. Implements one more meaningful operator in the observable from #10
