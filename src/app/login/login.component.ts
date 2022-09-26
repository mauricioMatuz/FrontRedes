import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string;
  password: string;
  atrapo: [];
  id;
  opccion;

  //  token : any;
  constructor(
    protected loginService: LoginService,
    protected dashboardService: DashboardService,
    public router: Router
  ) {}

  ngOnInit(): void {
    if (this.loginService.getID() != null) {
      this.router.navigate(['/Dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
  //esta funcion ejecuta todo los recursos que este componente
  //me imagino que el import o la clase preguntar
  /*logins() {
    const login = {username: this.username, password: this.password};
    
    this.loginService.login(login).subscribe(( Response) => {
      this.token = Response["token"]
      console.log(this.token)
      localStorage.setItem('token',this.token)
      //window.location.replace("http://127.0.0.1:8000/appi/v1/dashboard/Dashboard/")
      this.router.navigate(['/Dashboard']);
    })
  }*/

  iniciarSesion() {
    console.log(this.usuario, this.password + ' ESTO ES DE ANGULAR');
    const usuario = this.usuario;
    const password = this.password;
    this.loginService.login(usuario, password).subscribe(
      (res) => {
        this.atrapo = res;
        if (this.atrapo == null) {
          console.log('hola');
          this.opccion = 'error usuario o contraseña incorrecta';
        } else {
          this.router.navigate(['/Dashboard']);
        }
      },
      (err) => console.log(err)
    );
    //this.rutas.navigate(['/inicio']);
  }
}
