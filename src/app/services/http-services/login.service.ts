import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { LoginUser } from 'src/app/models/LoginUser';
import { BaseService } from './base.service';

@Injectable()
export class LoginService extends BaseService {
  token: string = '';

  authenticate(emailAdress: string, password: string): Observable<string> {
    var loginUser = new LoginUser();
    loginUser.email = emailAdress;
    loginUser.password = password;

    return this.http.post<string>(this.apiRoot + 'auth/login', loginUser).pipe(
      map((data) => {
        this.token = data;
        return this.token;
      })
    );
  }
}
