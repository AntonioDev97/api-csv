const dotenv = require('dotenv').config();
const Server = require('./src/app');
const { DBInstance } = require('./src/services/sequelize.service');
const Logger = require('./src/services/winston.service');

const Port = process.env.PORT || 4000;

DBInstance.sync().then(() => {
    Logger.info('Database sync complete');
    Server.listen(Port, () => {
        Logger.info(`Server initialized - running on port ${Port}`);
        console.log(`Server running on port ${Port}`);
    });
}).catch(error => {
    Logger.error('Database not initialized', error);
    console.error('Database not initialized', error);
});
