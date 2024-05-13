import { NgModule } from '@angular/core';
import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EnviromentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    EnviromentComponent,
  ],
  providers: [
  ],
  bootstrap: [
  ]
})
export class EnviromentModule { }
