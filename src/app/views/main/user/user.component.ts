import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@core/api-services';
import { IUser } from '@core/models';
import { trimRequiredValidator } from '@core/validators';
import { map, Observable} from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;
  user$ = new Observable();
  constructor(
    private _loginService: LoginService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initUserForm();
    this.user$ = this._loginService.getUser$()
      .pipe(
        map((res) => {
          this.userForm.patchValue(res)
          return res
        }))
  }

  initUserForm() {

    const email = /^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.userForm = this._fb.group({
      email: ['', [trimRequiredValidator(), Validators.pattern(email)]],
      firstName: ['', [trimRequiredValidator()]],
      lastName: ['', [trimRequiredValidator()]]
    })
  }


  submitForm() {
    const user:IUser = {
      email: this.userForm.get('email')?.value,
      firstName:this.userForm.get('firstName')?.value,
      lastName: this.userForm.get('lastName')?.value
    }

    this._loginService.setUser$(user)

  }
}

