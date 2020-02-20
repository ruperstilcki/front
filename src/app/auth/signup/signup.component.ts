import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  private autStatusSub: Subscription;
  showPass = false;
  signupForm: FormGroup;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.autStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.initForm();
  }

  private initForm() {
    this.signupForm = new FormGroup({
      // <-- Allow letters and numbers only -->
      username: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)])
    });
  }

  onSignup() {
    if (this.signupForm.invalid) { return; }
    this.isLoading = true;
    this.authService.createUser(
      this.signupForm.value.email,
      this.signupForm.value.password
    );
  }

  showPassword() {
    this.showPass = !this.showPass;
  }

  ngOnDestroy() {
    this.autStatusSub.unsubscribe();
  }
}
