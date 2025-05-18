import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель правил тарифных политик для тренеров
export const TeacherRateRule = sequelize.define('TeacherRateRule', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    policy_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'teacher_rate_policies',
            key: 'id'
        }
    },
    rule_type: {
        type: DataTypes.ENUM('fixed', 'per_lesson', 'per_student', 'threshold', 'percent'),
        allowNull: false
    },
    threshold: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    base_amount: {
        type: DataTypes.NUMERIC,
        allowNull: true
    },
    per_student: {
        type: DataTypes.NUMERIC,
        allowNull: true
    },
    percent_of_income: {
        type: DataTypes.NUMERIC,
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
    tableName: 'teacher_rate_rules',
    timestamps: false
});
