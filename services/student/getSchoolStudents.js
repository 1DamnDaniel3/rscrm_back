import { Student, Group, StudentGroup, Subscription, StudentSubscription, Client, StudentClient } from "../../db/index.js";


export class GetSchoolStudentsService {

    async getStudents(school_id) {
        try {
            const response = await Student.findAll({
                where: { school_id },
                include: [
                    { model: Group, through: { model: StudentGroup, attributes: [] }, attributes: ['id'] },
                    {
                        model: Subscription, through:
                            { model: StudentSubscription, attributes: ['issued_at', 'expires_at', 'remaining_visits', 'is_active'] }
                    },
                    { model: Client, through: { model: StudentClient, attributes: ['is_payer', 'relation'] }}
                ]

            })
            return response
        } catch (err) {
            throw err
        }
    }

}
export const getSchoolStudentsService = new GetSchoolStudentsService;