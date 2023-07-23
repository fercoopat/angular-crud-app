import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { EmployeeRoutingModule } from './employee-routing.module';

import { EmpAddEditComponent } from './components';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [EmpAddEditComponent, MainComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class EmployeeModule {}
