import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { AngularMaterialModule } from '../angular-material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
    declarations: [
      LoginComponent,
      SignupComponent,
      EditComponent
    ],
    imports: [
      CommonModule,
      AngularMaterialModule,
      ReactiveFormsModule,
      AuthRoutingModule,
      MatIconModule
    ]
})
export class AuthModule {}
