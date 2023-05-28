import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './navegacion/navegacion.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { Avance1Component } from './avances/avance1/avance1.component';
import { PlantillaComponent } from './avances/plantilla/plantilla.component';
import { Avance2Component } from './avances/avance2/avance2.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    Avance1Component,
    PlantillaComponent,
    Avance2Component,
    IntroduccionComponent
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
