// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// My Modules
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
    declarations: [
        // Todo lo que modulo Shared contiene
        // Directives
        // Pipes
        // Services
        // Componentes
        PageNotFoundComponent,
    ],
    exports: [
       // Todo lo que modulo Shared contiene pero para que los otros modulos puedan utilizarlo
        // Directives
        // Pipes
        // Services
        // Componentes
        PageNotFoundComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule {}
