## API-CSV
API to manage CSV files data

### Architecture
Bulletproof / SOLID / Singleton architecture

### Structure files
📦api-csv <br/>
 ┣ 📂src <br/>
 ┃ ┣ 📂services <br/>
 ┃ ┃ ┣ 📜sequelize.service.js <br/>
 ┃ ┃ ┗ 📜winston.service.js <br/>
 ┃ ┣ 📂utils <br/>
 ┃ ┣ 📂v1 <br/>
 ┃ ┃ ┣ 📂controllers <br/>
 ┃ ┃ ┃ ┗ 📜upload.controller.js <br/>
 ┃ ┃ ┣ 📂middlewares <br/>
 ┃ ┃ ┣ 📂models <br/>
 ┃ ┃ ┃ ┣ 📜data.model.js <br/>
 ┃ ┃ ┃ ┗ 📜provider.model.js <br/>
 ┃ ┃ ┗ 📂test <br/>
 ┃ ┣ 📜api.js <br/>
 ┃ ┗ 📜app.js <br/>
 ┣ 📜.env <br/>
 ┣ 📜.gitignore <br/>
 ┣ 📜README.md <br/>
 ┣ 📜client.http <br/>
 ┣ 📜index.js <br/>
 ┣ 📜package-lock.json <br/>
 ┗ 📜package.json <br/>
 
## Requirements
NodeJS Version: 14.15.4 <br />
NPM Version: 6.14.10 <br />

## Database
AWS RDS - Aurora MySQL instance <br />

## Endpoint
POST http://localhost:4000/v1/data-csv HTTP/1.1






