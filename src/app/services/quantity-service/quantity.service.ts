import { Injectable } from '@angular/core';
import { HttpService } from "../http-service/http.service";
@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  constructor(private httpService: HttpService) { }

  convert(body) {
    return this.httpService.post('/convert', body)
  }
}
