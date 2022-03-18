import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = '';

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  /** @description get the request using HttpClient
   * @param  {string} url - of the endpoint
   * @param  {any} data? - the payload of request
   */
  get(url: string, data?: any): Observable<any> {
    return this.httpClient.get(url, data);
  }
}
