import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';



@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome-page.html',
  styleUrls: ['welcome-page.scss'],
})
export class WelcomePage {

  constructor(private navCtrl: NavController) {

  }

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }

}
