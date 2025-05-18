import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Связь учеников и клиентов (например, родитель-ребёнок)
export const StudentClient = sequelize.define('StudentClient', {
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
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clients',
            key: 'id'
        }
    },
    is_payer: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    relation: {
        type: DataTypes.TEXT,
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
    tableName: 'student_clients',
    timestamps: false
});
