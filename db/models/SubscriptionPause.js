import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель пауз в абонементах учеников
export const SubscriptionPause = sequelize.define('SubscriptionPause', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_subscription_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'student_subscriptions',
            key: 'id'
        }
    },
    paused_from: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    paused_to: {
        type: DataTypes.DATEONLY,
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
    tableName: 'subscription_pauses',
    timestamps: false
});
