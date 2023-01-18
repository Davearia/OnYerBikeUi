import { Injectable } from '@angular/core';
import { AppConfig } from 'src/config/app-config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService extends AppConfig{
  constructor(private http: HttpClient) {
    super();
   }

   load(){
    return this.http.get<AppConfig>('app.config.json')
      .toPromise()
      .then(data => {
        this.webApiRoot = data?.webApiRoot,
        this.userName = data?.userName,
        this.password = data?.password
      })
      .catch(() =>{
        console.error("Could not load configuration");
      });
   }
}
