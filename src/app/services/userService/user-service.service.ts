import { Injectable } from '@angular/core';
import { HhtpServiceService } from '../httpService/hhtp-service.service'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private httpService: HhtpServiceService,
  ) { }

  login = (data: any) => {
    return this.httpService.post(`users/login`, data)
  }

}
