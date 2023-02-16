import { FormGroup } from "@angular/forms";

export class RegisterDTO {
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    roleId!: number
    constructor(registerForm: FormGroup) {
        this.firstName = registerForm.get('firstName')?.value;
        this.email = registerForm.get('email')?.value;
        this.password = registerForm.get('password')?.value;
        this.lastName=registerForm.get('lastName')?.value;
        this.roleId=registerForm.get('role')?.value;

    }
}