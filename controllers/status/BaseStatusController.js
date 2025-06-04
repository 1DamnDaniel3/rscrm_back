import { BaseController } from "../base.Controller.js";
import { Status } from "../../db/index.js";

export class BaseStatusController extends BaseController {
    constructor() {
        super(Status, {
            modelIdName: 'id',
        })
    }
}

export const baseStatusController = new BaseStatusController;

