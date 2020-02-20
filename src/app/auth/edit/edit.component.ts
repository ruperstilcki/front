import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit, OnDestroy {
  isLoading = false;
  private autStatusSub: Subscription;
  editForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.autStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.initForm();
  }

  private initForm() {
    let email = "";
    email = "aleksandar.djordjevic@gmail.com";

    this.editForm = new FormGroup({
      email: new FormControl(email, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.editForm.invalid) {
      return;
    }
    this.isLoading = true;
  }

  ngOnDestroy() {
    this.autStatusSub.unsubscribe();
  }
}
