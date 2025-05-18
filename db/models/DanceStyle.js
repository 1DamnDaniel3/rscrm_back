import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель направлений танцев
export const DanceStyle = sequelize.define('DanceStyle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    active_from: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    active_to: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    is_archived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
    tableName: 'dance_styles',
    timestamps: false
});
