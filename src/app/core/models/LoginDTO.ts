import { FormGroup } from "@angular/forms";

export class LoginDTO{
    email='';
    password=''
    constructor(loginForm:FormGroup){
        this.email = loginForm.get('email')?.value;
        this.password = loginForm.get('password')?.value
    }

    
}