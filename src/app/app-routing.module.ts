import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Avance1Component } from './avances/avance1/avance1.component';
import { Avance2Component } from './avances/avance2/avance2.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';

const routes: Routes = [
  { path : 'inicio', component : IntroduccionComponent},
  { path : 'avance1', component : Avance1Component},
  { path : 'avance2', component : Avance2Component},
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
