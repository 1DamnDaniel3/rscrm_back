import { BaseController } from "../base.Controller.js";
import { Lesson } from "../../db/index.js";

export class BaseLessonController extends BaseController {
    constructor() {
        super(Lesson, {
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

export const baseLessonController = new BaseLessonController;

