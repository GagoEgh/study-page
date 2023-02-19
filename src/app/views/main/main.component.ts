import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@core/api-services';
import { IUser } from '@core/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  user$ = new Observable<IUser | null>()
  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.user$ = this._loginService.getUser$()

  }

  logout(){
    localStorage.removeItem('accessToken');
    this._router.navigate([''])
  }

}
