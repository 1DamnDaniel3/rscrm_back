import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель финансовых отчетов
export const FinancialReport = sequelize.define('FinancialReport', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    period_start: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    period_end: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    total_income: {
        type: DataTypes.NUMERIC,
        allowNull: true
    },
    total_expenses: {
        type: DataTypes.NUMERIC,
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
    tableName: 'financial_reports',
    timestamps: false
});
