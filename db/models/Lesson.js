import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель занятий
export const Lesson = sequelize.define('Lesson', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'groups',
            key: 'id'
        }
    },
    direction_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'dance_styles',
            key: 'id'
        }
    },
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user_accounts',
            key: 'id'
        }
    },
    lesson_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: true
    },
    duration_minutes: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_canceled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
    tableName: 'lessons',
    timestamps: false
});
