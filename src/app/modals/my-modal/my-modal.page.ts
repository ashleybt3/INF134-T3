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
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  public button1: any = {color: 'light'};
  public button2: any = {color: 'light'};
  public button3: any = {color: 'light'};
  public button4: any = {color: 'light'};
  public button5: any = {color: 'light'};
  public button6: any = {color: 'light'};

  changeColor1() {
    if (this.button1.color == "light") {
      this.button1.color = "#0064A4";
    }
    else {
      this.button1.color = "light";
    }
  }

  changeColor2() {
    if (this.button2.color == "light") {
      this.button2.color = "#0064A4";
    }
    else {
      this.button2.color = "light";
    }
  }

  changeColor3() {
    if (this.button3.color == "light") {
      this.button3.color = "#0064A4";
    }
    else {
      this.button3.color = "light";
    }
  }

  changeColor4() {
    if (this.button4.color == "light") {
      this.button4.color = "#0064A4";
    }
    else {
      this.button4.color = "light";
    }
  }

  changeColor5() {
    if (this.button5.color == "light") {
      this.button5.color = "#0064A4";
    }
    else {
      this.button5.color = "light";
    }
  }

  changeColor6() {
    if (this.button6.color == "light") {
      this.button6.color = "#0064A4";
    }
    else {
      this.button6.color = "light";
    }
  }
}