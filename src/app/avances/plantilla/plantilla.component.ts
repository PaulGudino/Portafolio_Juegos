import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent {
  @Input() Opcion_clase : string =""
  @Input() Imagen : string =""
  @Input() Contenido : string =""
}
