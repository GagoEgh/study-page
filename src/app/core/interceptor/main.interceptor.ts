import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const IS_PUBLIC_API = new HttpContextToken<boolean>(() => true);

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor() { }
  readonly url = 'https://api.dev.padcllc.com';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const accessToken = localStorage.getItem('accessToken');
    let headers = request.headers;
    if (request.context.get(IS_PUBLIC_API) === true) {
      headers = headers.set('accessToken', `Bearer ${accessToken}`)
    }
    const clone = request.clone({
      url: `${this.url}${request.url}`,
      headers: headers,

    })

    return next.handle(clone)
    // .pipe(map((res)=>{
    //   console.log(res)
    //   return res 
    // }))

  }
}
