import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    { path: 'enviroment/:id', component: EnviromentComponent },
    { path: '', redirectTo: '/enviroment/11', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
