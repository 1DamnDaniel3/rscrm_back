import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель посещаемости
export const Attendance = sequelize.define('Attendance', {
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
    lesson_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'lessons',
            key: 'id'
        }
    },
    status: {
        type: DataTypes.ENUM('presence', 'absent', 'sick'),
        allowNull: true
    },
    marked_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user_accounts',
            key: 'id'
        }
    },
    marked_at: {
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
    tableName: 'attendance',
    timestamps: false
});
