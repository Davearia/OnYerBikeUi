import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './misc/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppConfig } from './misc/app-config';
import { AppComponent } from './app/app.component';
import { StoreModule } from './store/store.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonAppConfigService } from './services/json-app-config.service';

import { MaterialModule } from './material.module';

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
    MaterialModule
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
