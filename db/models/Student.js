import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель учеников (детей или взрослых, обучающихся в школе)
export const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    skill_level: {
        type: DataTypes.TEXT,
        allowNull: true,
        constraints: {
            check: {
                args: ["skill_level IN ('beginner', 'middle', 'pro')"],
                msg: 'Допустимые значения для skill_level: "beginner", "middle", "pro"'
            }
        }
    },
    contact: {
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
    tableName: 'students',
    timestamps: false
});
