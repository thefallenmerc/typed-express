import { Request } from "express";
import ValidatorJS from "validatorjs";

export default class Validator {

    public validated: object;

    protected isValidated = false;
    protected messages: object;
    protected rules: object;
    protected request: Request;
    protected validator: ValidatorJS;

    constructor(request: Request) {
        this.request = request;
    }

    public fails() {
        this.validate();
        return this.validator.fails();
    }

    public passes() {
        this.validate();
        return this.validator.passes();
    }

    get errors(): object {
        this.validate();
        return this.validator.errors.all();
    }

    protected validate() {
        if (!this.isValidated) {
            this.validator = new ValidatorJS(this.request.body, this.rules, this.messages);
            this.validated = {};
            for (const rule in this.rules) {
                if (this.rules.hasOwnProperty(rule)) {
                    this.validated[rule] = this.request.body[rule];
                }
            }
            this.isValidated = true;
        }
    }

}