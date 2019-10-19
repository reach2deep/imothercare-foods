import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match - used in password comparison
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: false });
        } else {
            matchingControl.setErrors(null);
        }
    };
}
