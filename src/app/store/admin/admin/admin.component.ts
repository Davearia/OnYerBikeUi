import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector:"admin",
    templateUrl: "admin.component.html",
    styleUrls: ["admin.component.css"]
})
export class AdminComponent {

    constructor(private auth: AuthService,
                private router: Router) { }

    logout() {
        this.auth.clear();
        this.router.navigateByUrl("/");
    }
}
