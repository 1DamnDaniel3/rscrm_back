import { BaseController } from "../base.Controller.js";
import { Client, ClientGroup, Group } from "../../db/index.js";
import { clientRegService } from "../../services/index.js";

export class BaseClientController extends BaseController {
    constructor() {
        super(Client, {
            modelIdName: 'id',
            includes: [
                {model: Group, through: {model: ClientGroup, attributes: []}}
            ]
        })
    }

    async create(req, res) {
        try {
            const clientData = req.body;
            const response = await clientRegService.createClien(clientData);
            return res.status(200).json(response)
        } catch (error) {
            return res.status(200).json({ message: "Internal Server Error", error: error.message })


        }
    }
}

export const baseClientController = new BaseClientController;

