## API-CSV
API to manage CSV files data

### Architecture
Bulletproof / SOLID / Singleton architecture

### Structure files
📦api-csv
 ┣ 📂src
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜sequelize.service.js
 ┃ ┃ ┗ 📜winston.service.js
 ┃ ┣ 📂utils
 ┃ ┣ 📂v1
 ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┗ 📜upload.controller.js
 ┃ ┃ ┣ 📂middlewares
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┣ 📜data.model.js
 ┃ ┃ ┃ ┗ 📜provider.model.js
 ┃ ┃ ┗ 📂test
 ┃ ┣ 📜api.js
 ┃ ┗ 📜app.js
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜client.http
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
## Requirements
NodeJS Version: 14.15.4 <br />
NPM Version: 6.14.10 <br />

## Database
AWS RDS - Aurora MySQL instance <br />

## Endpoint
POST http://localhost:4000/v1/data-csv HTTP/1.1






