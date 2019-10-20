import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  constructor(private navCtrl: NavController,
    private router: Router) {

}

  ngOnInit() {}
  goToItemList() {
    this.navCtrl.navigateRoot('/itemslist');
    
    }
}
