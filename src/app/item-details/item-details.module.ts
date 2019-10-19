import { ItemDetailsComponent } from './item-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsComponent
      }
    ])
  ],
  declarations: [ItemDetailsComponent]
})
export class ItemDetailsModule {}
