# ap-basket-db

see https://github.com/ash-uncover/ap-basket

see https://github.com/ash-uncover/ap-basket-api

## Prerequisite

We use Mongo DB as our core database system.

Our production and test systems are using Mongo Atlas instances but one can install a local

## Scripts

We provide scripts to reset the database and fill it with some test data

To drop all the collection and rebuild their indexes:

```
db-init.js
```

To insert some data into the collection

```
db-testdata.js
```
