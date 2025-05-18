import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель подписок учеников
export const StudentSubscription = sequelize.define('StudentSubscription', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'students',
            key: 'id'
        }
    },
    subscription_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'subscriptions',
            key: 'id'
        }
    },
    issued_at: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    expires_at: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    remaining_visits: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
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
    tableName: 'student_subscriptions',
    timestamps: false
});
