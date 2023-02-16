import { HttpClient, HttpContext, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import {
  IHttpResponse,
  ILoginResponse,
  IUser,
  LoginDTO
} from '@core/models/index';
import { Router } from '@angular/router';
import { IS_PUBLIC_API } from '@core/interceptor/main.interceptor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  LoggedIn(body: LoginDTO): Observable<IHttpResponse<ILoginResponse>> {
    return this._http.post<IHttpResponse<ILoginResponse>>('/auth/login', body, {
      context: new HttpContext().set(IS_PUBLIC_API, false)
    })
      .pipe(
        catchError((err: HttpErrorResponse) => {
          throw err.error.error.message[0]
        })
      )
  }

  getUserData(): Observable<IHttpResponse<IUser>> {
    return this._http.get<IHttpResponse<IUser>>('/user/me')
  }
}
