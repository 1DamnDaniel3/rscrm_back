import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Модель лидов (потенциальных клиентов)
export const Lead = sequelize.define('Lead', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    source_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'sources',
            key: 'id'
        }
    },
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'statuses',
            key: 'id'
        }
    },
    trial_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    qualification: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user_accounts',
            key: 'id'
        }
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    converted_to_client_at: {
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
    tableName: 'leads',
    timestamps: false
});
