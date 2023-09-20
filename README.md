# Goit-Wallet-DB

## Komendy

1. Po pierwsze - `npm install`
2. Do uruchomienia trybu prod - `npm start`
3. Do uruchomienia trybu dev - `npm run dev`
4. Do uruchomienia eslinta - `npm run lint`

## Endpoints

### Users
- [Register](http://localhost:3000/wallet/api/users/register) - POST
- [Login](http://localhost:3000/wallet/api/users/login) - POST
- [Logout](http://localhost:3000/wallet/api/users/logout) - POST
- [Reverify E-mail](http://localhost:3000/wallet/api/users/reverify) - POST
- [Verify E-mail](http://localhost:3000/wallet/api/users/verify/:verificationToken) - GET
- [Current](http://localhost:3000/wallet/api/users/current) - GET

### Transactions
- [All Transactions](http://localhost:3000/wallet/api/transactions) - GET
- [One by ID](http://localhost:3000/wallet/api/transactions/:id) - GET
- [Transaction's Category by ID](http://localhost:3000/wallet/api/transactions/categories/:id) - GET
- [Create Transaction](http://localhost:3000/wallet/api/transactions) - POST
- [Remove Transaction](http://localhost:3000/wallet/api/transactions/:id) - DELETE
- [Update Transaction](http://localhost:3000/wallet/api/transactions/:id) - PUT
