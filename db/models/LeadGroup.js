import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель связи лидов и групп
export const LeadGroup = sequelize.define('LeadGroup', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lead_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'leads',
            key: 'id'
        }
    },
    group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'groups',
            key: 'id'
        }
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
    tableName: 'lead_groups',
    timestamps: false
});
