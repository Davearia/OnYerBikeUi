import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { User } from 'src/app/models/user.model';
import { UseService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
 
  displayedColumns: string[] = ['firstName', 'lastName', 'emailAddress', 'phoneNumber', 'addressLine', 'city', 'postalCode'];
  dataSource!: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private useService: UseService) {      
    this.useService.loadUsers()
      .subscribe(users =>{      
        this.dataSource = new MatTableDataSource<User>(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;       
      }); 
   }
  
  filterData($event: any){
    this.dataSource.filter = $event.target.value;
  } 
  
}
