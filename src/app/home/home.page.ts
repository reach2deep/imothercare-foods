import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }

}
