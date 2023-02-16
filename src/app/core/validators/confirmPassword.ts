import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmPassword(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        const password = control.value.password;
        const confirm = control.value.confirm;
        if (password !== confirm) {
            return { confirm: true }
        }
        return null
    }
}