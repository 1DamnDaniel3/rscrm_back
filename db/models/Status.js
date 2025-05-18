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
    }
}, {
    tableName: 'statuses',
    timestamps: false
});
