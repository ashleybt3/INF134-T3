import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../modals/my-modal/my-modal.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalPage
      
    });

    modal.onDidDismiss().then(() => {
      //if (dataReturned !== null) {
        // this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      //}
    });

    return await modal.present();
  }
}
