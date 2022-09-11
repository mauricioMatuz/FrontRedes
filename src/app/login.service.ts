import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpClient) { }
  id;
  login(usuario, password): Observable<any> {
    this.id =  this.http.get(
      'http://localhost:8080/appi/login/'+usuario+'/'+password);
    console.log(this.id+ "  EN ANGULAR ID");
    localStorage.setItem("id",this.id);
    return this.id;
  } 

  getID(){
    return localStorage.getItem('id');
  }
  

}
