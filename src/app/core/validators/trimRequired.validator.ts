import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function trimRequiredValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value.trim()
        return !value ? { trim: true } : null
    }
}