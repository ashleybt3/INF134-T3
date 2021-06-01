import { Component, OnInit } from '@angular/core';
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.html',
  styleUrls: ['./item-page.page.scss'],
})
export class ItemPage implements OnInit {

  constructor(public navctrl: NavController) { }

  ngOnInit() {
  }

  messageSeller(){
    this.navctrl.navigateForward('message-person');
  }

}
