import { Component } from '@angular/core';
import { AppConfig } from 'src/config/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'On Yer Bike!';

  constructor(private appConfig: AppConfig){
    //console.log(appConfig.webApiRoot);
  }
}
