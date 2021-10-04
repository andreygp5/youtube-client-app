import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BASE_URL } from '../../core/constants/youtube';

@Injectable()
export class YoutubeApiInterceptor implements HttpInterceptor {
  private transformFunctions: ((request: HttpRequest<any>) => HttpRequest<any>)[] = [
    this.setApiKey.bind(this),
    this.setBaseUrl.bind(this),
  ];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.transformRequest(request));
  }

  private transformRequest(request: HttpRequest<any>): HttpRequest<any> {
    return this.transformFunctions.reduce((transformedRequest, func) => func(transformedRequest), request);
  }

  private setBaseUrl(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      url: `${BASE_URL}/${request.url}`,
    });
  }

  private setApiKey(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setParams: { 'key': environment.API_KEY },
    });
  }
}
