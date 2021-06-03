import { Component, OnInit } from '@angular/core';
import { 
  ModalController, 
  NavParams 
  } from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})

export class MyModalPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  buttonColor = "gray";

  changeColor() {
    this.buttonColor = "#FFF";

  }

}