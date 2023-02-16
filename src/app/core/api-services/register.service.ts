import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IHttpResponse, IRole, RegisterDTO } from '@core/models';
import { IS_PUBLIC_API } from '@core/interceptor/main.interceptor';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _http:HttpClient
  ) { }


  registration(body:RegisterDTO){
   return this._http.post('/auth/registration',body,{
    context:new HttpContext().set(IS_PUBLIC_API,false)
   })
  }

  getRole(){
    return  this._http.get<IHttpResponse<IRole[]>>('/role/all',
    {
       context:new HttpContext().set(IS_PUBLIC_API,false)
    })
    .pipe(map((res:IHttpResponse<any>)=>res.data))
  }
}
