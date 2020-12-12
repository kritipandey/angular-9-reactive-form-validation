import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  signUpForm: FormGroup;
  userDetails = {
    fullname: '',
    email: '',
    title: '',
    gender: ''
  };
  submitted = false;

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'fullname': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'title': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'createpassword': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')])
    });
  }

  onSubmit(){
    this.submitted = true;
    this.userDetails.fullname = this.signUpForm.value.userData.fullname;
    this.userDetails.email = this.signUpForm.value.userData.email;
    this.userDetails.title = this.signUpForm.value.title;
    this.userDetails.gender = this.signUpForm.value.gender

    this.signUpForm.reset();
  }
}