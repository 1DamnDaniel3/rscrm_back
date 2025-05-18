import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель школ танцев
export const School = sequelize.define('School', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    city: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: true,
        // ACTIVATE LATER
        // validate: {
        //     isEmail: true
        // }
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'schools',
    timestamps: false
});
