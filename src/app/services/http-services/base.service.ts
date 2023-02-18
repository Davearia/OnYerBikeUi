import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/misc/app-config';
import { StateService } from 'src/app/services/misc/state.service';

@Injectable()
export class BaseService {
  constructor(
    public http: HttpClient,
    private appConfig: AppConfig,
    public stateService: StateService
  ) {
    this.apiRoot = appConfig.webApiRoot;
  }

  public apiRoot: string | undefined;
}
