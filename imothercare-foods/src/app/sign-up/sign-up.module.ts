import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpFinishComponent } from './sign-up-finish/sign-up-finish.component';
import { SignUpVerifyComponent } from './sign-up-verify/sign-up-verify.component';
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
    SignUpRoutingModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: SignUpComponent,
    //     children: [
    //       {
    //         path: 'verify', loadChildren: './sign-up/sign-up.module#SignUpVerifyComponent'
    //       },
    //     ]
    //   //   children: [
    //   //     { path: 'verify', component: SignUpVerifyComponent },
    //   //     { path: 'finish', component: SignUpFinishComponent }
    //   // ]
    //   },
    //   {path: 'verify', loadChildren: './sign-up/sign-up.module#LazyModule'}
    // ])
  ],
  declarations: [SignUpComponent, SignUpVerifyComponent, SignUpFinishComponent]
})
export class SignUpModule {}
