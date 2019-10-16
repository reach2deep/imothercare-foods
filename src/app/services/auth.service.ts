import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(email, password) {
    return this.httpClient.post(`${environment.apiUrl}users/login`, {email, password});
  }

  register(userName, phoneNumber, password) {
    return this.httpClient.post(`${environment.apiUrl}users/register`, {userName, phoneNumber, password});
  }

  profile() {
    return this.httpClient.get(`${environment.apiUrl}users/profile`);
  }

  verify(key, email) {
    return this.httpClient.post(`${environment.apiUrl}users/verify`, {key, email});
  }

  passwordResetRequest(email) {
    return this.httpClient.post(`${environment.apiUrl}users/reset-password`, {email});
  }

  passwordResetVerify(key, email) {
    return this.httpClient.post(`${environment.apiUrl}users/reset-password-verify`, {key, email});
  }

  passwordResetSubmit(email, password) {
    return this.httpClient.post(`${environment.apiUrl}users/reset-password-submit`, {email, password});
  }

}
