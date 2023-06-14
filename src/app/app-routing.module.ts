import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Avance1Component } from './avances/avance1/avance1.component';
import { Avance2Component } from './avances/avance2/avance2.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { Avance3Component } from './avances/avance3/avance3.component';
import { Avance4Component } from './avances/avance4/avance4.component';

const routes: Routes = [
  { path: 'inicio', component: IntroduccionComponent },
  { path: 'avance1', component: Avance1Component },
  { path: 'avance2', component: Avance2Component },
  { path: 'avance3', component: Avance3Component },
  { path: 'avance4', component: Avance4Component },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
