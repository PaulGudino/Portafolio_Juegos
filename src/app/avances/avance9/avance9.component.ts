import { Component } from '@angular/core';

@Component({
  selector: 'app-avance9',
  templateUrl: './avance9.component.html',
  styleUrls: ['./avance9.component.css']
})

export class Avance9Component {
  popupImageSrc: string = '';
  isPopupVisible : boolean = false;

  openPopup(event: any) {
    console.log("entra por aqui master");
    const clickedImageSrc = event.target.src;
    this.popupImageSrc = clickedImageSrc;
    this.isPopupVisible = true;
  }
  closePopup(){
    this.isPopupVisible = false;
  }
}
