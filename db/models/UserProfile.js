import { DataTypes, DATE } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель профиля пользователя
export const UserProfile = sequelize.define('UserProfile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    account_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user_accounts',
            key: 'id'
        }
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    full_name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    birthdate:{
        type: DATE,
        allowNull: true
    }
}, {
    tableName: 'user_profiles',
    timestamps: false
});
