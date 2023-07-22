import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { EmpAddEditComponent } from 'src/app/employee';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _dialog: MatDialog) {}

  openAddEditEmpForm() {
    this._dialog.open(EmpAddEditComponent);
  }
}
