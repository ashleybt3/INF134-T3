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

  constructor(public router: Router, public navctrl: NavController,
    public notification: ToastController, public alert: AlertController) { }



  ngOnInit() {
  }

  @ViewChild(IonBackButtonDelegate, { static: false }) backButton: IonBackButtonDelegate;

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.setUIBackButtonAction();
  }

  setUIBackButtonAction() {
    this.backButton.onClick = () => {
      // this.navctrl.navigateBack('');
    };
  }

  // ionViewCanLeave(): boolean{
  //   // here we can either return true or false
  //   // depending on if we want to leave this view
  //   if(confirm){
  //      return true;
  //    } else {
  //      return false;
  //    }
  //  }

  displayPhoto(){
    this.loadPhoto = true;
    
  }
  uploadPost(){
    // this.router.navigate(['']);
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
		// include an alert message if there is an incorrect time input
		let alert = await this.alert.create({
		  cssClass: 'Cancel Post',
		  header: 'Discard Post?',
      buttons: [
        {
          text:'Cancel',
          handler: () => { 
            // let navTransition = alert.dismiss();
          }
          
        },
        {
          text: 'Discard',
          handler: () => {
            // this.confirm = true;
            this.navctrl.navigateBack('');
          }
        }] 
      
    
    });
    await alert.present();
  }
  
  async navigate(){
    this.navctrl.navigateForward('');
  }

}
