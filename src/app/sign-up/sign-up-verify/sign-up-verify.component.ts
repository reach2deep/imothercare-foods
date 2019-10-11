import { NavController } from '@ionic/angular';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-up-verify",
  templateUrl: "./sign-up-verify.component.html",
  styleUrls: ["./sign-up-verify.component.scss"]
})

export class SignUpVerifyComponent implements OnInit {
  
  constructor(private navCtrl: NavController) { 

  }

  ngOnInit() {

  }

  goToFinish() {
    this.navCtrl.navigateRoot('sign-up/finish');
    
  }
}
