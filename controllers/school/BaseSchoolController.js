import { BaseController } from "../base.Controller.js";
import { School } from "../../db/index.js";

export class BaseSchoolController extends BaseController{ 
    constructor() {
            super(School, {
                modelIdName:'id'})
        }
    
}

export const baseSchoolController = new BaseSchoolController;

