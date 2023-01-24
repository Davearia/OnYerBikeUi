import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, map, Observable } from "rxjs";
import { User } from "../models/user.model";
import { AppConfig } from "../misc/app-config";

@Injectable()
export class UseService {

	constructor(private http: HttpClient,
		private appConfig: AppConfig) {
			this.apiRoot = appConfig.webApiRoot;
		}

	apiRoot: string | undefined;
				
	public users: User[] = [];

	loadUsers(): Observable<User[]> {
		return this.http.get<User[]>(this.apiRoot + "User")
			.pipe(map(data => {
				this.users = data;
				return this.users;
			}));
	}
	
	getUsers(): User[] {		
		return this.users;
    }
			
}
	
