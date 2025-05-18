import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель связи клиентов и групп
export const ClientGroup = sequelize.define('ClientGroup', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clients',
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
    tableName: 'client_groups',
    timestamps: false
});
