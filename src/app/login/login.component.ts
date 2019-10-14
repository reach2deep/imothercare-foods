import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private navCtrl: NavController) {

  }

  ngOnInit() {

  }

  goToSignup() {
    this.navCtrl.navigateRoot('/sign-up');
  }
}
