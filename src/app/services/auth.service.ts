import { Injectable } from "@angular/core";
import { AppConfig } from "../app-components/app-config";

@Injectable()
export class AuthService {

    constructor(private appConfig: AppConfig) {}

    authenticated: boolean = false;

    authenticate(username: string, password: string): boolean {
        
        var un = this.appConfig.userName;
        var pw = this.appConfig.password;

        this.authenticated = false;

        if(username == un && password == pw){
            this.authenticated = true;
        }
        
        return this.authenticated;
    }

    get isAuthenticated(): boolean {
        return this.authenticated;
    }

    clear() {
        this.authenticated = false;
    }
}
