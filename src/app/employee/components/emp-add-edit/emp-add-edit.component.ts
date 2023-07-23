import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Employee } from '../../interfaces/employee.interfaces';
import { EmployeeService } from '../../services/employee.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  myForm: FormGroup = this._formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, , Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    birthday: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    education: ['', [Validators.required]],
    company: ['', [Validators.required, Validators.minLength(3)]],
    experience: [
      '',
      [Validators.required, Validators.min(1), Validators.max(50)],
    ],
    package: ['', [Validators.required, Validators.min(1), Validators.max(50)]],
  });

  education: string[] = [
    'Master',
    'Intermediate',
    'Diploma',
    'Graduate',
    'Post Graduate',
  ];

  errorMessage: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _employeeService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    private _sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) {}

  ngOnInit(): void {
    this.myForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.myForm.invalid)
      return this._sharedService.openSnackBar('Form most be valid');

    if (this.data) {
      this._employeeService
        .updateEmployee(this.data.id!, this.myForm.value)
        .subscribe({
          next: (value) => {
            this._sharedService.openSnackBar('Employee updated successfully!');

            this._dialogRef.close(true);
          },
          error: (err) => console.error(err),
        });
    } else {
      this._employeeService.addEmployee(this.myForm.value).subscribe({
        next: (value) => {
          this._sharedService.openSnackBar('Employee created successfully!');

          this._dialogRef.close(true);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
