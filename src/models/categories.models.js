const db = require("../tools/database")
const { DataTypes } = require("sequelize")

const Categories = db.define("categories", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
})

module.exports = Categories