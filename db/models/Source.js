import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель источников (откуда узнали о школе)
export const Source = sequelize.define('Source', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
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
    }
}, {
    tableName: 'sources',
    timestamps: false
});
