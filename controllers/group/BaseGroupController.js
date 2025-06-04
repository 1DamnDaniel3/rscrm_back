import { BaseController } from "../base.Controller.js";
import { Group } from "../../db/index.js";

export class BaseGroupController extends BaseController {
    constructor() {
        super(Group, {
            modelIdName: 'id',
        })
    }
}

export const baseGroupController = new BaseGroupController;

