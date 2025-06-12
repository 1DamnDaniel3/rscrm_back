import { BaseController } from "../base.Controller.js";
import { Group, Schedule } from "../../db/index.js";

export class BaseScheduleController extends BaseController {
    constructor() {
        super(Schedule, {
            modelIdName: 'id',
            includes:[
                {model: Group}
            ]

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

export const baseScheduleController = new BaseScheduleController;

