import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parrafos',
  templateUrl: './parrafos.component.html',
  styleUrls: ['./parrafos.component.css']
})
export class ParrafosComponent {
  @Input() Opcion_clase: string = ""
  @Input() Imagen: string = ""
  @Input() Subtitulo: string = ""
  @Input() Contenido: any = ""
  @Input() Contenido2: any = ""
}
