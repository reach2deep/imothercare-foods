import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {
  constructor(private navCtrl: NavController,
    private router: Router) {
}

ngOnInit() {
}

goToItems() {
this.navCtrl.navigateRoot('/items');
}

}
