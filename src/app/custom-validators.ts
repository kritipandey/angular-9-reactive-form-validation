// Only for forbidden user names.

import { FormControl } from "@angular/forms";

export class CustomValidators {
    static invalidName(control: FormControl): {[s: string]: boolean} {
        if(control.value === 'Test'){
            return {'invalidName': true };                 
        }
        return null;
    }
}