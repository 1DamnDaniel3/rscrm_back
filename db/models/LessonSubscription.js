import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель привязки занятий к абонементам
export const LessonSubscription = sequelize.define('LessonSubscription', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lesson_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'lessons',
            key: 'id'
        }
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
            model: 'student_subscriptions',
            key: 'id'
        }
    },
    used_at: {
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
    tableName: 'lesson_subscriptions',
    timestamps: false
});
