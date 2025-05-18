import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель ставок тренеров
export const TeacherRate = sequelize.define('TeacherRate', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user_accounts',
            key: 'id'
        }
    },
    policy_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'teacher_rate_policies',
            key: 'id'
        }
    },
    active_from: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    active_to: {
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
    tableName: 'teacher_rates',
    timestamps: false
});
