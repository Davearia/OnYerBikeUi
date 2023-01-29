import { Injectable } from "@angular/core";
import { first, map, Observable } from "rxjs";

import { BaseService } from "./base.service";
import { User } from "src/app/models/user.model";

@Injectable()
export class UserService extends BaseService {
				
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
	
