import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})

export class SignUpComponent implements OnInit {
  
  constructor(private navCtrl: NavController,
              private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) {

  }

  success: Boolean = false;
  registerForm: FormGroup;
  isSubmitted = false;
  error: Boolean = false;
  errorText: String;

  get formControls() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm  =  this.formBuilder.group({
      userName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    console.log('register');
    this.isSubmitted = true;
    this.goToVerify();
    // if (this.registerForm.invalid) {
    //   return;
    // }
    // this.authService.register(
    //   this.registerForm.value.userName, this.registerForm.value.phoneNumber,
    //         this.registerForm.value.password
    // ).subscribe((res: any) => {
    //   if (res.success) {
    //     // Display success message on success
    //     this.success = true;
    //   }
    // }, (err) => {
    //   this.error = true;
    //   this.errorText = err.error.errors[0].msg;
    // });
  }

  goToVerify() {
    this.navCtrl.navigateRoot('sign-up/verify');

  }
}
