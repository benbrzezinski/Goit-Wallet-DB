# Goit-Wallet-DB

## Komendy

1. Po pierwsze - `npm install`
2. Do uruchomienia trybu prod - `npm start`
3. Do uruchomienia trybu dev - `npm run dev`
4. Do uruchomienia eslinta - `npm run lint`

## Endpoints

1. Users - `http://localhost:3000/wallet/api/users`:
   post/register - `http://localhost:3000/wallet/api/users/register`
   post/login - `http://localhost:3000/wallet/api/users/login`
   post/logout - `http://localhost:3000/wallet/api/users/logout`
   post/reverify e-mail - `http://localhost:3000/wallet/api/users/reverify`
   get/verify e-mail - `http://localhost:3000/wallet/api/users/verify/:verificationToken`
   get/current - `http://localhost:3000/wallet/api/users/current`

2. Transactions - `http://localhost:3000/wallet/api/transactions`:
   get/all - `http://localhost:3000/wallet/api/transactions`
   get/one by id - `http://localhost:3000/wallet/api/transactions/:id`
   get/transaction's category by id - `http://localhost:3000/wallet/api/transactions/categories/:id`
   post/create transaction - `http://localhost:3000/wallet/api/transactions`
   delete/remove transaction - `http://localhost:3000/wallet/api/transactions/:id`
   put/update transaction - `http://localhost:3000/wallet/api/transactions/:id`
