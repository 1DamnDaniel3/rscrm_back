import { BaseController } from "../base.Controller.js";
import { UserProfile } from "../../db/index.js";

export class ProfileController extends BaseController {
    constructor() {
        super(UserProfile, {
            modelIdName: 'id',
        })
    }


}

export const profileController = new ProfileController;

