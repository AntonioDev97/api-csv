const { DataTypes } = require("sequelize");

const DataModel = (sequelize) => sequelize.define('data', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    provider_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    uuid: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    vin: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    make: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    model:{
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    mileage:{
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    year: {
        type: DataTypes.STRING(5),
        allowNull: true,
    },
    price: {
        type: DataTypes.STRING(25),
        allowNull: true,
    },
    zip_code: {
        type: DataTypes.STRING(15),
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

module.exports = DataModel;