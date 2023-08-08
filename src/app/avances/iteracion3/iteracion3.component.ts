import { Component } from '@angular/core';

@Component({
  selector: 'app-iteracion3',
  templateUrl: './iteracion3.component.html',
  styleUrls: ['./iteracion3.component.css']
})
export class Iteracion3Component {
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
