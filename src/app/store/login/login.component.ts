import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseUiComponentComponent } from '../base-ui-component/base-ui-component.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseUiComponentComponent {
  username: string = '';
  password: string = '';
  errorMessage?: string;

  override ngOnInit(): void {}

  authenticate(form: NgForm) {
    if (form.valid) {
      this.loginService
        .authenticate(this.username, this.password)
        .subscribe((response) => {
          if (response.toString().length > 0) {
            this.state.Token = response;
            this.router.navigateByUrl('/product-list');
          } else {
            this.errorMessage = 'Authentication Failed';
          }
        });
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
