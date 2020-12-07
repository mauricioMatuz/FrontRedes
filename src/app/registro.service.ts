import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(protected http: HttpClient) { }
  registro(registro: any): Observable<any> {
    return this.http.post(
      'http://redesequipo.ddns.net:8080/appi/registro',
      registro
    );
  }
}
