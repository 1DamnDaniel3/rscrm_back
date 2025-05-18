import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель абонементов
export const Subscription = sequelize.define('Subscription', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    visit_limit: {
        type: DataTypes.INTEGER,
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
    tableName: 'subscriptions',
    timestamps: false
});
