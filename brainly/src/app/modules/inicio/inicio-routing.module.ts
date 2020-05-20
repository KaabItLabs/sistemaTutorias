// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// My Pages
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent
    },
    {
        path: 'registro/',
        component: RegistroComponent
    },
    {
        path: 'login/',
        component: LoginComponent
    },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class InicioRoutingModule {}
