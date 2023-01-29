import { NgModule } from "@angular/core";
import { OrderService } from "src/app/services/http-services/order.service";
import { ProductService } from "src/app/services/http-services/product.service";
import { UserService } from "src/app/services/http-services/user.service";
import { AuthService } from "src/app/services/misc/auth.service";
import { StateService } from "src/app/services/misc/state.service";

const services: any[] = [OrderService, ProductService, UserService, AuthService, StateService]

@NgModule({
    providers: [services]
})
export class ServiceModule {}