import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель групп
export const Group = sequelize.define('Group', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    entity_type: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
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
    tableName: 'groups',
    timestamps: false
});
