import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfig } from "src/app/misc/app-config";

@Injectable()
export class BaseService {

	constructor(public http: HttpClient,
		private appConfig: AppConfig) {
			this.apiRoot = appConfig.webApiRoot;
		}

	public apiRoot: string | undefined;
						
}
	
