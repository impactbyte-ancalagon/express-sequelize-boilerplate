# Express Sequelize Boilerplate

## Setup Database

1. Create database with these names:

- `todo_dev`
- `todo_production`

## Setup App

1. Install global dependency:
   ```sh
   npm i -g sequelize-cli
   # or
   yarn global add sequelize-cli
   ```
2. Install local dependencies:
   ```sh
   npm i
   # or
   yarn
   ```
3. Edit `.env`

## Starting App

Without migrations

```sh
npm start
# or
yarn start
```

Without migrations

```sh
sequelize db:migrate
npm start
# or
sequelize db:migrate
yarn start
```

Access API server by opening http://localhost:8000
