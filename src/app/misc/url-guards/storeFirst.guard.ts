import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { BaseUiComponentComponent } from "src/app/store/base-ui-component/base-ui-component.component";
@Injectable()
export class StoreFirstGuard {
    private firstNavigation = true;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != BaseUiComponentComponent) {
                this.router.navigateByUrl("/");               
                return false;
            }
        }
        return true;
    }
}
