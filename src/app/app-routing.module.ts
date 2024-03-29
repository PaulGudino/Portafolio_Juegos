import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Avance1Component } from './avances/avance1/avance1.component';
import { Avance2Component } from './avances/avance2/avance2.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { Avance3Component } from './avances/avance3/avance3.component';
import { Avance4Component } from './avances/avance4/avance4.component';
import { Avance5Component } from './avances/avance5/avance5.component';
import { Avance6Component } from './avances/avance6/avance6.component';
import { Avance7Component } from './avances/avance7/avance7.component';
import { Avance8Component } from './avances/avance8/avance8.component';
import { Avance9Component } from './avances/avance9/avance9.component';
import { Avance10Component } from './avances/avance10/avance10.component';
import { Iteracion1Component } from './avances/iteracion1/iteracion1.component';
import { Iteracion2Component } from './avances/iteracion2/iteracion2.component';
import { Iteracion3Component } from './avances/iteracion3/iteracion3.component';
import { TeaserComponent } from './avances/teaser/teaser.component';
const routes: Routes = [
  { path: 'inicio', component: IntroduccionComponent },
  { path: 'avance1', component: Avance1Component },
  { path: 'avance2', component: Avance2Component },
  { path: 'avance3', component: Avance3Component },
  { path: 'avance4', component: Avance4Component },
  { path: 'avance5', component: Avance5Component },
  { path: 'avance6', component: Avance6Component },
  { path: 'avance7', component: Avance7Component },
  { path: 'avance8', component: Avance8Component },
  //Segundo Parcial
  { path: 'avance9', component: Avance9Component },
  { path: 'avance10', component: Avance10Component },
  { path: 'iteracion1', component: Iteracion1Component},
  { path: 'iteracion2', component: Iteracion2Component },
  { path: 'iteracion3', component: Iteracion3Component },
  { path: 'teaser', component: TeaserComponent },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
