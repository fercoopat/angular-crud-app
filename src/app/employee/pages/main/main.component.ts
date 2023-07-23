import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { EmpAddEditComponent } from '../../components';
import { Employee } from '../../interfaces/employee.interfaces';
import { EmployeeService } from '../../services/employee.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'birthday',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _employeeService: EmployeeService,
    private _dialog: MatDialog,
    private _sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getEmployees() {
    return this._employeeService.getEmployees().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.error,
    });
  }

  deleteEmployee(id: number) {
    return this._employeeService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._sharedService.openSnackBar('Employee deleted!', 'Done');
        this.getEmployees();
      },
      error: console.log,
    });
  }

  openEditForm(data: Employee) {
    this._dialog.open(EmpAddEditComponent, { data });
  }
}
