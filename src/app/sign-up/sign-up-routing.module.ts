import { SignUpFinishComponent } from './sign-up-finish/sign-up-finish.component';
import { SignUpVerifyComponent } from './sign-up-verify/sign-up-verify.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {path: '', component: SignUpComponent},
    {path: 'verify', component: SignUpVerifyComponent},
    {path: 'finish', component: SignUpFinishComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule {
}
