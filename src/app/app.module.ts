import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './navegacion/navegacion.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Avance1Component } from './avances/avance1/avance1.component';
import { PlantillaComponent } from './avances/plantilla/plantilla.component';
import { Avance2Component } from './avances/avance2/avance2.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Avance3Component } from './avances/avance3/avance3.component';
import { ParrafosComponent } from './avances/parrafos/parrafos.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    Avance1Component,
    PlantillaComponent,
    Avance2Component,
    IntroduccionComponent,
    Avance3Component,
    ParrafosComponent,
    Avance4Component,
    Avance5Component,
    Avance6Component,
    Avance7Component,
    Avance8Component,
    Avance9Component,
    Avance10Component,
    Iteracion1Component,
    Iteracion2Component,
    Iteracion3Component,
    TeaserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
