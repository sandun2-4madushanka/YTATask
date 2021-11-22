import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetailsForm!: FormGroup;
  private subscription: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(): void {
    this.loginDetailsForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  login(): void {
    let username: string;
    let password: string;
    username = this.loginDetailsForm.value.username;
    password = this.loginDetailsForm.value.password;
    if (this.loginDetailsForm.invalid) {
      Object.keys(this.loginDetailsForm.controls).forEach((field: any) => {
        const control: any = this.loginDetailsForm.get(field);
        control.markAsDirty({ onlySelf: true });
        control.markAsTouched({ onlySelf: true });
      });
    } else {
      if (this.checkAuthentication(username, password)) {
        this.router.navigate(['imagePost'], { relativeTo: this.activatedRoute });
      } else {

      }
    }

  }

  checkAuthentication(name: string, password: string): boolean {
    let isValidUser: boolean;
    if (name === 'YTA' && password === 'YTA123') {
      isValidUser = true
    } else if (name === 'YTA' && password === 'YTA1234') {
      isValidUser = true
    } else {
      isValidUser = false;
    }
    return isValidUser;
  }

  get userName() { return this.loginDetailsForm.get('username'); }

  get password() { return this.loginDetailsForm.get('password'); }

  ngOnDestroy(): void {
    this.subscription.forEach((data: any) => data.unsubscribe());
  }

}
