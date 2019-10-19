import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    // Check if user is guest
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/app/dashboard']);
      return false;
    }
    return true;
  }
}
