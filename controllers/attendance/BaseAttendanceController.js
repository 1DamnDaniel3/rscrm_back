import { BaseController } from "../base.Controller.js";
import { Attendance } from "../../db/index.js";

export class BaseAttendanceController extends BaseController {
    constructor() {
        super(Attendance, {
            modelIdName: 'id',


        })
    }

    // async create(req, res) {
    //     try {
    //         const leadData = req.body;
    //         const response = await leadRegService.createLead(leadData);
    //         return res.status(200).json(response)
    //     } catch (error) {
    //         return res.status(200).json({ message: "Internal Server Error", error: error.message})


    //     }
    // }
}

export const baseAttendanceController = new BaseAttendanceController;

