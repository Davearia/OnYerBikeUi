import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppConfig } from './app-config';
import { AppComponent } from './app.component';
import { StoreModule } from '../store/store-components/store.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonAppConfigService } from '../services/json-app-config.service';

export function initializerFn(jsonAppConfigService : JsonAppConfigService){
  return () => {
    return jsonAppConfigService.load();
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    AppRoutingModule,
    HttpClientModule   
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
