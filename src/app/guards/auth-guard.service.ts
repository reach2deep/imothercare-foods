import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    // Check if user is authenticated
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    // Decode token
    const tokenPayload = decode(this.auth.getToken());
    // Check if email is verified
    if (!tokenPayload.user.verified) {
      this.router.navigate(['/verification-pending']);
      localStorage.removeItem('token');
      return false;
    }
    return true;
  }
}
