import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from '../map-modal/map-modal.component';
import { NavController} from "@ionic/angular";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  type: string = "My Posts";

  constructor(private modalctrl: ModalController, public navctrl: NavController) {}

  async openModal(){
    const modal = await this.modalctrl.create({
      component: MapModalComponent,
      cssClass: "my-custom-modal-class"
    });

    await modal.present();
  }
  itemPage(){
    this.navctrl.navigateForward('item-page2');
  }
}
