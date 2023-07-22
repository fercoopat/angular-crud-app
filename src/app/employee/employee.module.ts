import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { EmployeeRoutingModule } from './employee-routing.module';

import { EmpAddEditComponent } from './components';

@NgModule({
  declarations: [EmpAddEditComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class EmployeeModule {}
