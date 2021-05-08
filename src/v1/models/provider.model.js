const { DataTypes } = require("sequelize");

const ProviderModel = (sequelize) => sequelize.define('provider', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    deleted: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0
    }
},{
    defaultScope: {
        attributes: { exclude: ['deleted'] },
        where: { deleted: 0 },
    }
});

module.exports = ProviderModel;