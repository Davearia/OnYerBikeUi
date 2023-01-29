import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/misc/auth.service';

@Component({
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css'],
})
export class AuthComponent implements OnInit {
  username?: string;
  password?: string;
  errorMessage?: string;
  authenticated: boolean = false;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated) {
      this.router.navigateByUrl('/admin');
    }
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.authenticated = false;
      if (this.auth.authenticate(this.username ?? '', this.password ?? '')) {
        this.router.navigateByUrl('/admin');
      } else {
        this.errorMessage = 'Authentication Failed';
      }
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
