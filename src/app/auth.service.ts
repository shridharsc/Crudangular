import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  storekey(data){
    localStorage.setItem("id",data.id)
    localStorage.setItem("panme",data.pname)
    localStorage.setItem("pcolor",data.pcolor)
  }



}
