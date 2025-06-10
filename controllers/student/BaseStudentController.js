import { BaseController } from "../base.Controller.js";
import { Student } from "../../db/index.js";
import { getSchoolStudentsService } from "../../services/student/getSchoolStudents.js";
import { studRegService } from "../../services/index.js";

export class BaseStudentController extends BaseController {
    constructor() {
        super(Student, {
            modelIdName: 'id',

        })
    }

    async getAllStudInfo(req, res) {
        try {
            const { school_id } = req.body;
            const response = await getSchoolStudentsService.getStudents(school_id)
            return res.status(200).json(response)

        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error: error.message })
        }
    }

    async create(req, res) {
        try {
            const studData = req.body;
            const response = await studRegService.createStudent(studData);
            return res.status(200).json(response)
        } catch (error) {
            return res.status(200).json({ message: "Internal Server Error", error: error.message })


        }
    }
}

export const baseStudentController = new BaseStudentController;

