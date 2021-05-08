const dotenv = require('dotenv').config();
const Server = require('./src/app');
const DBInstance = require('./src/services/sequelize.service');

const Port = process.env.PORT || 4000;

DBInstance.sync().then(() => {
    Server.listen(Port, () => {
        console.log(`Server running on port ${Port}`);
    });
}).catch(error => {
    console.error('Database not initialized', error);
});
