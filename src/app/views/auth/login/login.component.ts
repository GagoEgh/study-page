import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { trimRequiredValidator } from 'src/app/core/validators/trimRequired.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private _fb: FormBuilder
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

  getFormControlname(name: string,errore:string) {
    return this.loginForm.get(name)?.dirty && this.loginForm.get(name)?.hasError(errore)
  }

  submitForm() {
    if (this.loginForm.valid) {
      console.log('submit', this.loginForm.value);
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
