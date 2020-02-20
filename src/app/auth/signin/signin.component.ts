import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {
  isLoading = false;
  private autStatusSub: Subscription;
  showPass = false;
  loginForm: FormGroup;
  mode = 'login';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.autStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
    this.mode = (this.router.url.indexOf('signup') !== -1) ? 'signup' : ((this.router.url.indexOf('edit') !== -1) ? 'edit' : 'login') ;
    console.log('mode:', this.mode);
    this.initForm();
  }

  private initForm() {
    let username = '';
    let password = '';
    let email = '';
    let useremail = '';

    if (this.mode === 'edit') {
      username = 'aleksandar.djordjevic';
      password = '312321312';
      useremail = '312321312';
      email = 'aleksandar.djordjevic@gmail.com'; }

      if (this.mode === 'login') {
        this.loginForm = new FormGroup({
        username : new FormControl(username, Validators.required),
        password : new FormControl(password, Validators.required)
      });}

      else {this.loginForm = new FormGroup({
        username : new FormControl(username, Validators.required),
        email : new FormControl(email, [Validators.required, Validators.email]),
        password : new FormControl(password, Validators.required),
        useremail : new FormControl(useremail, Validators.required)
      });}
  }

  onSubmit() {
    if (this.loginForm.invalid) { return; }
    this.isLoading = true;

    (this.mode === 'signup') ?
    this.authService.createUser(this.loginForm.value.email, this.loginForm.value.password) :
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
  }

  showPassword() {
    this.showPass = !this.showPass;
  }

  ngOnDestroy() {
    this.autStatusSub.unsubscribe();
  }

}
