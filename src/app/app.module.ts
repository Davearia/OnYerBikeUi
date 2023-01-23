import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-components/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppConfig } from './app-components/app-config';
import { AppComponent } from './app-components/app.component';
import { StoreModule } from './store/store-components/store.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonAppConfigService } from './services/json-app-config.service';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

export function initializerFn(jsonAppConfigService : JsonAppConfigService){
  return () => {
    return jsonAppConfigService.load();
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule  
  ],
  providers: [
    {
      provide: AppConfig,
      deps: [HttpClient],
      useExisting: JsonAppConfigService
    },
    {
      provide: APP_INITIALIZER,
      multi:true,
      deps: [JsonAppConfigService],
      useFactory: initializerFn
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
