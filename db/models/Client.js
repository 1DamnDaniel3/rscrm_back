import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель клиентов (реальных клиентов, не лидов)
export const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    contact: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    is_parent: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    school_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'schools',
            key: 'id'
        }
    }
}, {
    tableName: 'clients',
    timestamps: false
});
