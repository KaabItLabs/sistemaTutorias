// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BaseComponent } from './components/base/base.component';
import { TestComponent } from './components/test/test.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'catalogo',
        component: CatalogoComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrainlyRoutingModule { }
