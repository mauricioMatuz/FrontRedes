import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroComponent } from './registro/registro.component';
import {FormEmpleadosComponent} from './form-empleados/form-empleados.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'Registro',
    component: RegistroComponent,
    pathMatch: 'full',
  },
  {
    path: 'Agregar',
    component: FormEmpleadosComponent,
    pathMatch: 'full',
  },
  {
    path: 'Editar/:id',
    component: FormEmpleadosComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
