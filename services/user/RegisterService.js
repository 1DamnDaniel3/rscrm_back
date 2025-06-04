import { UserAccount, UserProfile, School } from '../../db/index.js';

export class RegisterService {

    async registerUser(data, transaction) { // DO NOT USE IN CONTROLLER
        const { account, profile } = data;

        const newAccount = await UserAccount.create({
            email: account.email,
            password: account.password,
            role: account.role || 'teacher',
            school_id: account.school_id,
        }, { transaction });

        const newProfile = await UserProfile.create({
            user_id: newAccount.id,
            full_name: profile.full_name || '',
            phone: profile.phone || null,
            birthdate: profile.birthdate || null,
            account_id: newAccount.id
        }, { transaction });

        return { newAccount, newProfile };
    }

    async registerEmployee(data) {
        if (!data || !data.account || !data.profile) {
            throw new Error('Invalid data structure');
        }

        if (!data.account.email || !data.account.password) {
            throw new Error('Email and password are required');
        }

        const existingUser = await UserAccount.findOne({
            where: { email: data.account.email }
        });

        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        const transaction = await UserAccount.sequelize.transaction();

        try {
            const { newAccount, newProfile } = await this.registerUser(data, transaction);
            await transaction.commit();

            return {
                account: {
                    id: newAccount.id,
                    email: newAccount.email,
                    role: newAccount.role,
                    created_at: newAccount.created_at
                },
                profile: {
                    name: newProfile.name,
                    phone: newProfile.phone,
                    city: newProfile.city,
                    birthdate: newProfile.birthdate
                }
            };
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async registerAdminWithSchool(data) {
        const { school, ...userData } = data;

        if (!school || !school.name) {
            throw new Error('School data is required');
        }

        if (!userData.account || !userData.account.email || !userData.account.password) {
            throw new Error('Email and password are required');
        }

        const existingUser = await UserAccount.findOne({
            where: { email: userData.account.email }
        });

        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        const transaction = await UserAccount.sequelize.transaction();

        try {
            // создаём школу
            const newSchool = await School.create({
                name: school.name,
                city: school.city || null,
                phone: school.phone || null,
                email: school.email || null
            }, { transaction });

            // создаём админа и связываем со школой
            userData.account.role = 'owner';
            userData.account.school_id = newSchool.id;

            const { newAccount, newProfile } = await this.registerUser(userData, transaction);

            await transaction.commit();

            return {
                school: {
                    id: newSchool.id,
                    name: newSchool.name
                },
                account: {
                    id: newAccount.id,
                    email: newAccount.email,
                    role: newAccount.role
                },
                profile: {
                    full_name: newProfile.full_name
                }
            };
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

}

export const registerService = new RegisterService();