import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor() {}
  readonly url = 'https://api.dev.padcllc.com';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
 
   
    const clone = request.clone({
      url:`${this.url}${request.url}`
    })

    return next.handle(clone)
    .pipe(map((res)=>{
      console.log(res)
      return res 
    }))
  
  }
}
