```
pnpm i
pnpm dev
```

# It uses

- Zustand
- Zustand devtools middleware
- Zustand immer middleware
- Zustand persist middleware

# There are 3 store

1. Store 1: Basic implementation of zustand

- count
- increment
- decrement

2. Store 2: Basic implementation of zustand with slice

- user
  - fullName
  - email
  - age
  - address
  - setAddress
- card
  - cardNumber
  - cardHolder
  - expiryDate
  - securityCode
  - setSecurityCode

3. Store 3: Basic implementation of zustand with slice and immer
   - user
     - fullName
     - email
     - age
     - address
       - city
       - country
         - name
         - code
     - setCity
     - setCountryName
     - setCountryCode
   - card
     - cardNumber
     - contact
       - email
       - phone
     - setCardNumber
     - setEmailOfCard
     - setPhoneOfCard
