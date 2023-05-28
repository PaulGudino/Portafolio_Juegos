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
       "nombre": "Avance1",
       "icono": "note",
       "ruta": "/avance1"
    },
    {
      "nombre": "Avance2",
      "icono": "note",
      "ruta": "/avance2"
   }
    
 ]

}
