import { Injectable } from '@angular/core';

@Injectable()
export class LoginUser {
  public email?: string;
  public password: string = '';
  public token: string = '';
}
