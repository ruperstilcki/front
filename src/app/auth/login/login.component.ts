import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private autStatusSub: Subscription;
  showPass = false;
  loginForm: FormGroup;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.autStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
    this.initForm();
  }

  private initForm() {
    let user = '';
    let password = '';

    user = 'aleksandar.djordjevic@gmail.com';
    password = '16101990';

    this.loginForm = new FormGroup({
        user : new FormControl(user, Validators.required),
        password : new FormControl(password, Validators.required)
      });

  }

  onLogin() {
    if (this.loginForm.invalid) { return; }
    this.isLoading = true;
    this.authService.login(this.loginForm.value.user, this.loginForm.value.password);
  }

  showPassword() {
    this.showPass = !this.showPass;
  }

  ngOnDestroy() {
    this.autStatusSub.unsubscribe();
  }

}
