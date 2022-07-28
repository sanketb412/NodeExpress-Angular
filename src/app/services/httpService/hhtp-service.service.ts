import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HhtpServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  post(url: string, data: any) {
    return this.httpClient.post(url, data)
  }

  get(url: string) {  
    return this.httpClient.get(url)
  }
}
