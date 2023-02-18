// Angular modules
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Local app modules
import { AppRoutingModule } from './misc/modules/app-routing.module';
import { MaterialModule } from './misc/modules/material.module';
import { ModelModule } from './misc/modules/model.module';
import { ServiceModule } from './misc/modules/service.module';

//App config components
import { JsonAppConfigService } from './services/misc/json-app-config.service';
import { AppConfig } from './misc/app-config';

//Local components
import { StoreFirstGuard } from './misc/url-guards/storeFirst.guard';
import { AuthGuard } from './misc/url-guards/auth.guard';
import { LoginGuard } from './misc/url-guards/login.guard';

import { CounterDirective } from './misc/custom-directives/counter.directive';
import { AppComponent } from './app/app.component';
import { BaseUiComponentComponent } from './store/base-ui-component/base-ui-component.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { ProductDetailsComponent } from './store/product-details/product-details.component';
import { StoreNavHeaderComponent } from './store/store-nav-header/store-nav-header.component';
import { CartSummaryComponent } from './store/cart-summary/cart-summary.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { AdminBannerComponent } from 'src/app/store/admin/admin-banner/admin-banner.component';
import { OrdersComponent } from 'src/app/store/admin/orders/orders.component';
import { AuthComponent } from './store/admin/auth/auth.component';
import { AdminComponent } from './store/admin/admin/admin.component';
import { ProductEditorComponent } from './store/admin/product-editor/product-editor.component';
import { UserComponent } from './store/admin/user/user.component';
import { LoginComponent } from './store/login/login.component';
import { ErrorInterceptor } from './misc/interceptors/error.interceptor';
import { TokenInterceptor } from './misc/interceptors/token-interceptor';

export function initializerFn(jsonAppConfigService: JsonAppConfigService) {
  return () => {
    return jsonAppConfigService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    BaseUiComponentComponent,
    ProductListComponent,
    ProductDetailsComponent,
    StoreNavHeaderComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    AdminBannerComponent,
    OrdersComponent,
    AuthComponent,
    AdminComponent,
    ProductEditorComponent,
    UserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModelModule,
    ServiceModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [ProductListComponent],
  providers: [
    {
      provide: AppConfig,
      deps: [HttpClient],
      useExisting: JsonAppConfigService,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [JsonAppConfigService],
      useFactory: initializerFn,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    StoreFirstGuard,
    AuthGuard,
    LoginGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
