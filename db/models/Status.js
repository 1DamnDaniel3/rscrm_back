import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель статусов (например, для лидов или клиентов)
export const Status = sequelize.define('Status', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    type: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    school_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'schools',
            key: 'id'
        }
    },
}, {
    tableName: 'statuses',
    timestamps: false
});
