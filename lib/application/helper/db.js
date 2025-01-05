const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});


const User = sequelize.define('users', {
    userId: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    birthDate: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    creationDate: { type: DataTypes.STRING },
    lastLogin: { type: DataTypes.STRING },
}, {
    freezeTableName: true,
    timestamps: false,
});


const LoginToken = sequelize.define('login_token', {
    token: { type: DataTypes.STRING, allowNull: false },
    expiresIn: { type: DataTypes.STRING },
    userIp: { type: DataTypes.STRING },
}, {
    freezeTableName: true,
    timestamps: false,
});


async function setupDatabase() {
    try {
        await sequelize.authenticate();
        console.log('MySQL bağlantısı başarılı!');
        await sequelize.sync();
        console.log('Tablolar başarıyla oluşturuldu veya zaten mevcut!');
    } catch (error) {
        console.error('Veritabanı kurulumu sırasında hata:', error);
    }
}

module.exports = { sequelize, User, LoginToken, setupDatabase };
