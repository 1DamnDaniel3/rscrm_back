import { Student, StudentGroup } from "../../db/index.js";

export class StudRegService {

    async createStudent(studData) {
        const transaction = await Student.sequelize.transaction();
        try {
            const newStudent = await Student.create(studData, { transaction });
            await StudentGroup.create({
                lead_id: newStudent.id,
                group_id: studData.group_id,
                school_id: newStudent.school_id
            }, { transaction });

            await transaction.commit();
            return newStudent;
        } catch (err) {
            await transaction.rollback();
            throw err;
        }

    }

}
export const studRegService = new StudRegService;