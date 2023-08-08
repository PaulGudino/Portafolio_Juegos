import { Component } from '@angular/core';

@Component({
  selector: 'app-iteracion1',
  templateUrl: './iteracion1.component.html',
  styleUrls: ['./iteracion1.component.css']
})
export class Iteracion1Component {
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
