import { BaseController } from "../base.Controller.js";
import { Lead, UserAccount, UserProfile, Source, Status } from "../../db/index.js";

export class BaseLeadController extends BaseController {
    constructor() {
        super(Lead, {
            modelIdName: 'id',
            attributes: ['id', 'name', 'phone', 'trial_date',
                'qualification', 'created_at', 'converted_to_client_at'
            ],
            includes: [
                { model: Source,},
                { model: Status},
                { model: UserAccount, attributes: ['id'], include: [{ model: UserProfile, attributes: ['full_name'] }] }
            ],
            
        })
    }
}

export const baseLeadController = new BaseLeadController;

