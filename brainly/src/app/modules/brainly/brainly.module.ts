// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { LeftMenuComponent } from './components/menu/left-menu/left-menu.component';
import { RightMenuComponent } from './components/menu/right-menu/right-menu.component';
import { BaseComponent } from './components/base/base.component';
import { TestComponent } from './components/test/test.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';

// Routing
import { BrainlyRoutingModule } from './brainly.routing.module';

@NgModule({
  declarations: [
    LeftMenuComponent,
    RightMenuComponent,
    BaseComponent,
    TestComponent,
    CatalogoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrainlyRoutingModule,
  ]
})
export class BrainlyModule { }
