import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})

export class SignUpComponent implements OnInit {
  
  constructor(private navCtrl: NavController,
              private router: Router) { 

  }

  ngOnInit() {

  }

  goToVerify() {
    this.navCtrl.navigateRoot('sign-up/verify');
    
  }
}
