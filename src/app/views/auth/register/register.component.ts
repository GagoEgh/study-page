import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { RegisterService } from '@core/api-services';
import { IRole, RegisterDTO } from '@core/models';
import { trimRequiredValidator } from '@core/validators';
import { confirmPassword } from '@core/validators/confirmPassword';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  role$ = new Observable<IRole[]>()

  constructor(
    private _fb: FormBuilder,
    private _registerService:RegisterService,
    private _rout:Router
    ) { }

  ngOnInit(): void {
    this.role$ = this._registerService.getRole()
    this.formInit()
  }


  formInit() {
    const email = /^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.registerForm = this._fb.group({
      firstName: ['',[trimRequiredValidator()]],
      lastName: ['',[trimRequiredValidator()]],
      email: ['',[trimRequiredValidator(), Validators.pattern(email)]],
      password: ['',[trimRequiredValidator()]],
      confirm: ['', [trimRequiredValidator()]],
      role:['',[Validators.required]]
    },{validators:[confirmPassword()]});
  }
   


  submitForm(): void {
    if (this.registerForm.valid) {
      const register = new RegisterDTO(this.registerForm);
      this._registerService.registration(register)
      .subscribe({
        next:()=>{
          this._rout.navigate(['/'])
        }
      })
  

    } else {
      Object.values(this.registerForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
