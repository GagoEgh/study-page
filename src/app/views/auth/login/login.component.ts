import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IHttpResponse,
  ILoginResponse,
  LoginService,
  LoginDTO,
  trimRequiredValidator
} from '@core/index';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.initForm()

  }

  initForm() {
    const email = /^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.loginForm = this._fb.group({
      email: ['', [trimRequiredValidator(), Validators.pattern(email)]],
      password: ['', [trimRequiredValidator()]]
    })
  }

  getFormControlname(name: string, errore: string) {
    return this.loginForm.get(name)?.dirty && this.loginForm.get(name)?.hasError(errore)
  }

  submitForm() {
    if (this.loginForm.valid) {
      const user = new LoginDTO(this.loginForm);
      this._loginService.LoggedIn(user)
        .subscribe({
          next: (res: IHttpResponse<ILoginResponse>) => {
            localStorage.setItem('accessToken',res.data.accessToken);
            this._router.navigate(['main']);
           
            console.log(res.data.accessToken)
          }
        })

    } else {

      Object.values(this.loginForm.controls).forEach((control: AbstractControl) => {

        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

  }
}
