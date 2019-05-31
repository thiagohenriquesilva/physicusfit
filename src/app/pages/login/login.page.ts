import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formlogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formlogin = this.formBuilder.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  loginUser(user){
    this.authservice.loginUser(user)
    .then(
      res => this.router.navigateByUrl('/dashboard')
    )
  }

  goToRegisterPage(){
    this.router.navigateByUrl('/register');
  }

}
