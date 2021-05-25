import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nav = document.querySelector('ion-nav');

  constructor(public router: Router, public navctrl: NavController) {}
  ngOnInit(){

  }
  postPage(){
    // this.router.navigate(['/post-page'], { skipLocationChange: true});
    this.navctrl.navigateForward('post-page');
  }

}
