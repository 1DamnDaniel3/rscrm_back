import { BaseController } from "../base.Controller.js";
import { Lead, UserAccount, UserProfile, Source, Status, Group, LeadGroup } from "../../db/index.js";
import { leadRegService } from "../../services/index.js";

export class BaseLeadController extends BaseController {
    constructor() {
        super(Lead, {
            modelIdName: 'id',
            attributes: ['id', 'name', 'phone', 'trial_date',
                'qualification', 'created_at', 'converted_to_client_at'
            ],
            includes: [
                { model: Source, },
                { model: Status },
                { model: UserAccount, attributes: ['id'], include: [{ model: UserProfile, attributes: ['full_name'] }] },
                { model: Group, through: { model: LeadGroup, attributes: [] }, attributes: ['id'] }
            ],

        })
    }

    async create(req, res) {
        try {
            const leadData = req.body;
            const response = await leadRegService.createLead(leadData);
            return res.status(200).json(response)
        } catch (error) {
            return res.status(200).json({ message: "Internal Server Error", error: error.message})


        }
    }
}

export const baseLeadController = new BaseLeadController;

