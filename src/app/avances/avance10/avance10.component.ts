import { Component } from '@angular/core';

@Component({
  selector: 'app-avance10',
  templateUrl: './avance10.component.html',
  styleUrls: ['./avance10.component.css']
})
export class Avance10Component {
  popupImageSrc: string = '';
  isPopupVisible : boolean = false;

  openPopup(event: any) {
    const clickedImageSrc = event.target.src;
    this.popupImageSrc = clickedImageSrc;
    this.isPopupVisible = true;
  }
  closePopup(){
    this.isPopupVisible = false;
  }
}
