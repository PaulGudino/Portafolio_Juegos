import { Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {

  menu: any[] = [
    {
      "nombre": "Inicio",
      "icono": "home",
      "ruta": "/inicio"
    },
    {
      "nombre": "Primeras Ideas",
      "icono": "sports_esports",
      "ruta": "/avance1"
    },
    {
      "nombre": "Ideas Seleccionadas",
      "icono": "sports_esports",
      "ruta": "/avance2"
    },
    {
      "nombre": "Juego Versión 1",
      "icono": "sports_esports",
      "ruta": "/avance3"
    },
    {
      "nombre": "Juego Versión 1.1",
      "icono": "sports_esports",
      "ruta": "/avance4"
    },
    {
      "nombre": "Juego Versión 2",
      "icono": "sports_esports",
      "ruta": "/avance5"
    }

  ]

}