Fullstack Apps of restaurant management

Feature :

- CRUD

## Project Setup

1. First, open your VSCODE
2. open two terminal inside on it,
3. Change directory based on folder name (client/server) in each terminal

- **Server**

  - after you `cd server`
    **Install depedency modules**

BEFORE USE SEQUELIZE-CLI : MAKE SURE THAT YOUR USERNAME AND PASSWORD IN `server/config` ARE MATCHING WITH YOUR DATABASE USERNAME AND PASSSWORD. IF NOT, PLEASE EDIT THE CONFIG USERNAME AND PASSWORD IN `development, test` KEYS SECTION.
  ```
  npm install
  npx sequelize-cli db:create
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all
  ```

  **Run server**

  ```
  npm run dev
  ```

- **Client**

  - after you `cd client`
    **Install depedency modules**

  ```
  npm install
  ```

  **Run client**

  ```
  npm run start
  ```

  currently email & password :

  1. email : pessi@gmail.com | password : pessi
  2. email : penaldo@gmail.com | password : penaldo
  3. email : adminini@gmail.com | password : adminini
