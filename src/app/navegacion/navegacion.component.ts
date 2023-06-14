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
      "nombre": "Juego Seleccionado",
      "icono": "sports_esports",
      "ruta": "/avance3"
    },
    {
      "nombre": "Descripción del juego",
      "icono": "sports_esports",
      "ruta": "/avance4"
    }

  ]

}