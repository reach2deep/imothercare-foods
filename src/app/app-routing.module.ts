import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./welcome-page/welcome-page.module').then( m => m.WelcomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'items', loadChildren: () => import('./item-details/item-details.module').then( m => m.ItemDetailsModule)},
  { path: 'itemslist', loadChildren: () => import('./item-list/item-list.module').then( m => m.ItemListModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
