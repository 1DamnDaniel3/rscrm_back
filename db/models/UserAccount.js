import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
import bcrypt from 'bcryptjs';

// Модель пользовательских аккаунтов
export const UserAccount = sequelize.define('UserAccount', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
        // ACTIVATE LATER
        // validate: {
        //     isEmail: true
        // }
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
        set(value) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(value, salt);
            this.setDataValue('password', hash);
        }
    },
    role: {
        type: DataTypes.ENUM('admin', 'manager', 'teacher'),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    school_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'schools',
            key: 'id'
        },
        allowNull: true
    }
}, {
    tableName: 'user_accounts',
    timestamps: false
});
