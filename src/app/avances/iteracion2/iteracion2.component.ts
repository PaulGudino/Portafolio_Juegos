import { Component } from '@angular/core';

@Component({
  selector: 'app-iteracion2',
  templateUrl: './iteracion2.component.html',
  styleUrls: ['./iteracion2.component.css']
})
export class Iteracion2Component {
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
