import { NavController } from '@ionic/angular';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-up-finish",
  templateUrl: "./sign-up-finish.component.html",
  styleUrls: ["./sign-up-finish.component.scss"]
})

export class SignUpFinishComponent implements OnInit {
  
  constructor(private navCtrl: NavController) { 

  }

  ngOnInit() {

  }

  goToHome() {
    this.navCtrl.navigateRoot('home');
  }
}
