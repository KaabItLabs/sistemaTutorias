// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    CommonModule
  ],
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule { }
