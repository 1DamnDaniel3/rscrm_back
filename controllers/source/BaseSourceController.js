import { BaseController } from "../base.Controller.js";
import { Source } from "../../db/index.js";

export class BaseSourceController extends BaseController {
    constructor() {
        super(Source, {
            modelIdName: 'id',
        })
    }
}

export const baseSourceController = new BaseSourceController;

