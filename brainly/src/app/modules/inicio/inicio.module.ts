// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router
import { InicioRoutingModule } from './inicio-routing.module';

// Components

// Pages
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

// Angular Material
import { MaterialModule } from './../../material/material.module';


@NgModule({
  declarations: [
    PrincipalComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule
  ]
})
export class InicioModule { }
