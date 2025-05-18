import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель тарифных политик для тренеров
export const TeacherRatePolicy = sequelize.define('TeacherRatePolicy', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    created_at: {
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
    tableName: 'teacher_rate_policies',
    timestamps: false
});
