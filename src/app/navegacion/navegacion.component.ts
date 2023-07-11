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
      "nombre": "Primer Parcial",
      "icono": "home",
      "subsecciones":
       [{
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
        "nombre": "Perro vs Ladron",
        "icono": "sports_esports",
        "ruta": "/avance3"
      },
      {
        "nombre": "PvsL Prototipado",
        "icono": "sports_esports",
        "ruta": "/avance4"
      },
      {
        "nombre": "Wrestlements",
        "icono": "sports_esports",
        "ruta": "/avance5"
      },
      {
        "nombre": "Wts Reglas",
        "icono": "sports_esports",
        "ruta": "/avance6"
      },
      {
        "nombre": "Wts Testing",
        "icono": "sports_esports",
        "ruta": "/avance7"
      },
  ],
      mostrarSubsecciones: false
    },
    {
      "nombre": "Segundo Parcial",
      "icono": "home",
    }
  ];
  toggleSubsecciones(item: any): void {
    item.mostrarSubsecciones = !item.mostrarSubsecciones;
    console.log(item.mostrarSubsecciones);
  }
}