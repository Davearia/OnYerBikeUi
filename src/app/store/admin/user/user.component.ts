import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { User } from 'src/app/models/user.model';
import { BaseUiComponentComponent } from '../../base-ui-component/base-ui-component.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent extends BaseUiComponentComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'emailAddress',
    'phoneNumber',
    'addressLine',
    'city',
    'postalCode',
  ];
  dataSource!: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  override ngOnInit(): void {
    this.userService.loadUsers().subscribe((users) => {
      this.dataSource = new MatTableDataSource<User>(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }
}
