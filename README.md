# Goit-Wallet-DB

## Komendy

1. Po pierwsze - `npm install`
2. Do uruchomienia trybu prod - `npm start`
3. Do uruchomienia trybu dev - `npm run dev`
4. Do uruchomienia eslinta - `npm run lint`

## Endpoints

### Users

- Register: `https://wallet-api.cyclic.cloud/api/users/register` - POST
- Login: `https://wallet-api.cyclic.cloud/api/users/login` - POST
- Logout: `https://wallet-api.cyclic.cloud/api/users/logout` - POST
- Reverify E-mail: `https://wallet-api.cyclic.cloud/api/users/reverify` - POST
- Verify E-mail: `https://wallet-api.cyclic.cloud/api/users/verify/:verificationToken` - GET
- Current: `https://wallet-api.cyclic.cloud/api/users/current` - GET

### Transactions

- All Transactions: `https://wallet-api.cyclic.cloud/api/transactions` - GET
- Filter by month or year Transactions: `https://wallet-api.cyclic.cloud/api/transactions?month={}&year={}` - GET
- One by ID: `https://wallet-api.cyclic.cloud/api/transactions/:id` - GET
- Transaction's Category by ID: `https://wallet-api.cyclic.cloud/api/transactions/categories/:id` - GET
- Create Transaction: `https://wallet-api.cyclic.cloud/api/transactions` - POST
- Remove Transaction: `https://wallet-api.cyclic.cloud/api/transactions/:id` - DELETE
- Update Transaction: `https://wallet-api.cyclic.cloud/api/transactions/:id` - PUT
