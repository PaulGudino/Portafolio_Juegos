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
          "nombre": "Perro vs Ladrón",
          "icono": "sports_esports",
          "subsecciones": [
            {
              "nombre": "Versión 0.1",
              "icono": "sports_esports",
              "ruta": "/avance4"
            },
            {
              "nombre": "Prototipado",
              "icono": "sports_esports",
              "ruta": "/avance3"
            }
          ],
          mostrarSubSubsecciones: false
        },
        {
          "nombre": "Wrestlements",
          "icono": "sports_esports",
          "subsecciones": [
            {
              "nombre": "Versión 0.1",
              "icono": "sports_esports",
              "ruta": "/avance5"
            },
            {
              "nombre": "Versión v0.2",
              "icono": "sports_esports",
              "ruta": "/avance6"
            },
            {
              "nombre": "Testing",
              "icono": "sports_esports",
              "ruta": "/avance7"
            },
            {
              "nombre": "Versión Final",
              "icono": "sports_esports",
              "ruta": "/avance8"
            },
          ],
          mostrarSubSubsecciones: false
        },
        ],
      mostrarSubsecciones: false
    },
    {
      "nombre": "Segundo Parcial",
      "icono": "home",
      "subsecciones":
        [{
          "nombre": "Ideación Inicial",
          "icono": "sports_esports",
          "ruta": "/avance9"
        },
        {
          "nombre": "Planificación",
          "icono": "sports_esports",
          "ruta": "/avance10"
        },
        {
          "nombre": "Iteración 1",
          "icono": "sports_esports",
          "ruta": "/iteracion1"
        },
        {
          "nombre": "Iteración 2",
          "icono": "sports_esports",
          "ruta": "/iteracion2"
        },
        {
          "nombre": "Iteración 3",
          "icono": "sports_esports",
          "ruta": "/iteracion3"
        },
      ],
      mostrarSubsecciones: false
    },
    
  ];

  toggleSubSubsecciones(item: any): void {
    item.mostrarSubSubsecciones = !item.mostrarSubSubsecciones;
    console.log(item.mostrarSubSubsecciones)
  }
  toggleSubsecciones(item: any): void {
    item.mostrarSubsecciones = !item.mostrarSubsecciones;
  }
}