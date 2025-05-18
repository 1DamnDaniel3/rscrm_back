import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель платежей
export const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stud_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'students',
            key: 'id'
        }
    },
    subscription_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'subscriptions',
            key: 'id'
        }
    },
    amount: {
        type: DataTypes.NUMERIC,
        allowNull: true
    },
    paid_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user_accounts',
            key: 'id'
        }
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
    tableName: 'payments',
    timestamps: false
});
