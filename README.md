# Goit-Wallet-DB

## Komendy

1. Po pierwsze - `npm install`
2. Do uruchomienia trybu prod - `npm start`
3. Do uruchomienia trybu dev - `npm run dev`
4. Do uruchomienia eslinta - `npm run lint`

## Endpoints

### Users

- Register: `https://wallet-l6cf.onrender.com/api/users/register` - POST
- Login: `https://wallet-l6cf.onrender.com/api/users/login` - POST
- Logout: `https://wallet-l6cf.onrender.com/api/users/logout` - POST
- Reverify E-mail: `https://wallet-l6cf.onrender.com/api/users/reverify` - POST
- Verify E-mail: `https://wallet-l6cf.onrender.com/api/users/verify/:verificationToken` - GET
- Current: `https://wallet-l6cf.onrender.com/api/users/current` - GET

### Transactions

- All Transactions: `https://wallet-l6cf.onrender.com/api/transactions` - GET
- Transaction's Category by ID: `https://wallet-l6cf.onrender.com/api/transactions/categories/:id` - GET
- Create Transaction: `https://wallet-l6cf.onrender.com/api/transactions` - POST
- Remove Transaction: `https://wallet-l6cf.onrender.com/api/transactions/:id` - DELETE
- Update Transaction: `https://wallet-l6cf.onrender.com/api/transactions/:id` - PUT
