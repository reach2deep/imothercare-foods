import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sign-up-verify',
  templateUrl: './sign-up-verify.component.html',
  styleUrls: ['./sign-up-verify.component.scss']
})

export class SignUpVerifyComponent implements OnInit {

   public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  public sent: boolean;
  public phoneNumber: number;
  public smsCode: string;
  confirmationResult: any;

  constructor(private navCtrl: NavController) {
    // this.phoneNumber = 971585670097;
    // console.log(this.phoneNumber);
    // const firebaseConfig = {
    //   apiKey: 'AIzaSyBuYAAsRIv__ucori3f1RSUCxSXUYAMhGE',
    //   authDomain: 'imother-care.firebaseio.com',
    //   databaseURL: 'https://imother-care.firebaseio.com',
    //   projectId: 'imother-care',
    //   storageBucket: 'imother-care.appspot.com',
    //   messagingSenderId: '3708166249'
    // };
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(firebaseConfig);
    // }
  }

  ngOnInit() {

    // // this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    // this.recaptchaVerifier =  new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    //   callback: (response) => {
    //     // reCAPTCHA solved, allow signInWithPhoneNumber.
    //     // ...
    //     console.log('reCAPTCHA Verified callback');
    //     this.verifyPhone();
    //   },
    //   'expired-callback': () => {
    //     console.log('reCAPTCHA FAILED');
    //     // Response expired. Ask user to solve reCAPTCHA again.
    //     // ...
    //   }
    // });
    // // this.verifyPhone(971585670097);
    // this.recaptchaVerifier.render();
  }

  verifyPhone() {
    console.log(this.smsCode);
    console.log('verifyPhone');
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = '+' + this.phoneNumber;
    console.log(phoneNumberString);
   // this.confirmationResult = firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier);
   
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then( Result => {
        // console.log(this.smsCode);
        this.sent = true;
        console.log(Result.verificationId);
        this.confirmationResult= Result.verificationId;
    })
    .catch(function(error) {
      console.error('SMS not sent', error);
    });

  }

   goToFinish() {
    // console.log(this.smsCode);
    
    // console.log(this.confirmationResult);
    // const verification = this.smsCode;
    // const signInCredential = firebase.auth.PhoneAuthProvider.credential(this.confirmationResult, this.smsCode);
    // firebase.auth().signInWithCredential(signInCredential).then((info) => { console.log(info); }, (error) => {
    // console.log(error); });
    // OLD CODE
    // if (verification != null) {
    //         console.log(verification);
    //         this.confirmationResult.confirm(verification)
    //           .then((good) => {
    //             console.log('all checks out');
    //           })
    //           .catch((bad) => {
    //             console.log('code verification was bad');
    //           });
    //       } else {
    //         console.log('No verification code entered');
    //       }
     this.navCtrl.navigateRoot('sign-up/finish');
   }
}
