# Validation in typed express

1. Copy [src/validators/sample-validator.ts](../src/validators/sample-validator.ts) to your desired name in the same directory
2. Content of the file will be - 

``` typescript
import Validator from "./validator"

export default class SampleValidator extends Validator {
    protected rules = {
        email: "email|required",
        password: "string|required",
    };
}
```

3. Customize the rules object as per your wish, `Validator` uses [ValidatorJS] underneath, refer to its documentation for rules.

4. Import the newly created class in your [controller]() or [route]()

``` typescript
    const validator = new SampleValidator(req);

    if(validator.fails()) {
        return res.json(validator.errors);
    }
```
