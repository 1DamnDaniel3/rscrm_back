import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель платежей за занятия
export const LessonPayment = sequelize.define('LessonPayment', {
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
    amount: {
        type: DataTypes.NUMERIC,
        allowNull: true
    },
    paid_at: {
        type: DataTypes.DATE,
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
    tableName: 'lesson_payments',
    timestamps: false
});
