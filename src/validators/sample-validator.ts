import Validator from "./validator"

export default class SampleValidator extends Validator {
    protected rules = {
        email: "email|required",
        password: "string|required",
    };
}