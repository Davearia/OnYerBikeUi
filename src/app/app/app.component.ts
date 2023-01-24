import { Component } from '@angular/core';
import { AppConfig } from '../misc/app-config';
import {Sort} from '@angular/material/sort';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'On Yer Bike!';
  startDate = new Date(1990, 0, 1);

  constructor(private appConfig: AppConfig){
    //console.log(appConfig.webApiRoot);
  }
}
