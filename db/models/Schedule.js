import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель расписаний групп
export const Schedule = sequelize.define('Schedule', {
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
        allowNull: false,
        references: {
            model: 'dance_styles',
            key: 'id'
        }
    },
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user_accounts',
            key: 'id'
        }
    },
    weekday: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    duration_minutes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    school_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'schools',
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
    }
}, {
    tableName: 'schedules',
    timestamps: false
});
