import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export  class HttpService {

  constructor(private http: HttpClient) { }
  baseurl = ''

  post(url, body) {
    return this.http.post(this.baseurl + url, body)
  }

  
}
