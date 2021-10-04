import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpHelperService {
  constructor() {
  }

  getHttpParams(paramsObj: { [key: string]: string | number }): HttpParams {
    return Object.entries(paramsObj).reduce((params, [key, value]) => params.append(key, value), new HttpParams());
  }
}
