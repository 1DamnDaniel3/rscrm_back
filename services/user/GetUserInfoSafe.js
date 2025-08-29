import { UserAccount, UserProfile } from '../../db/index.js';

export class GetUserInfoService {
    async getInfo(filterParams) {
        try {
            // Базовые поля, которые можно фильтровать
            const validFilterFields = [
                'id', 
                'school_id', 
                'role', 
                'email', 
                'is_active',
                'created_at'
            ];
            
            // Строим условия для WHERE
            const whereClause = {};
            for (const field in filterParams) {
                if (validFilterFields.includes(field)) {
                    whereClause[field] = filterParams[field];
                }
            }

            // Если нет ни одного валидного поля фильтрации
            if (Object.keys(whereClause).length === 0) {
                throw new Error('No valid filter parameters provided');
            }

            const users = await UserAccount.findAll({
                where: whereClause,
                include: [
                    {
                        model: UserProfile,
                    },
                ],
                attributes: ['id', 'role']
            });

            return users;
        } catch (error) {
            console.error('Error in GetUserInfoService:', error);
            throw error; // Пробрасываем ошибку для обработки в контроллере
        }
    }
}

export const getUserInfoService = new GetUserInfoService();