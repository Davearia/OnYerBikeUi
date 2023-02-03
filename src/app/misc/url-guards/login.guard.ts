import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginService } from 'src/app/services/http-services/login.service';
import { StateService } from 'src/app/services/misc/state.service';

@Injectable()
export class LoginGuard {
  constructor(
    private router: Router,
    private loginService: LoginService,
    public state: StateService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.state.Token.toString().length == 0) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

  clear() {
    this.state.Token = '';
  }
}
