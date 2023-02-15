import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHttpResponse, ILoginResponse, LoginDTO } from '@core/models/index';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  LoggedIn(body:LoginDTO):Observable<IHttpResponse<ILoginResponse>>{
    return  this.http.post<IHttpResponse<ILoginResponse>>('/auth/login',body)
  }
  
}
