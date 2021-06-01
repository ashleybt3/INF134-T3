import { Component, OnInit } from '@angular/core';
import { NavController, ToastController , AlertController} from "@ionic/angular";
import { Router } from '@angular/router';
import { IonBackButtonDelegate } from '@ionic/angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {
  loadPhoto = false;
  confirm = false;
  loadSlider = false;

  constructor(public router: Router, public navctrl: NavController,
    public notification: ToastController, public alert: AlertController) { }



  ngOnInit() {
  }

  @ViewChild(IonBackButtonDelegate, { static: false }) backButton: IonBackButtonDelegate;

  ionViewDidEnter() {
    this.setUIBackButtonAction();
  }

  setUIBackButtonAction() {
    this.backButton.onClick = () => {
    };
  }


  displayPhoto(){
    this.loadPhoto = true;
    
  }
  uploadPost(){
    this.loadPhoto = false;
    this.loadSlider = false;
    this.navctrl.navigateForward('', {animated:false});
    this.notification.create({
      message: 'Item has been posted!',
      position: "top",
      duration: 1500
      }).then( (toast) => {
      toast.present();
      });
  }

  async presentAlert() {
		let alert = await this.alert.create({
		  cssClass: 'Cancel Post',
		  header: 'Discard Post?',
      buttons: [
        {
          text:'Cancel',
          handler: () => { 
          }
          
        },
        {
          text: 'Discard',
          handler: () => {
            this.loadPhoto = false;
            this.loadSlider = false;
            this.navctrl.navigateBack('');
          }
        }] 
      
    
    });
    await alert.present();
  }

  segmentChanged(event){
    if(event.detail.value == "Select"){
      this.loadSlider = true;
    }
    else{
      this.loadSlider = false;
    }
  }
  
  async navigate(){
    this.navctrl.navigateForward('');
    this.loadSlider = false;
  }

}
