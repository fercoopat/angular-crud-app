import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from '../interfaces/employee.interfaces';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  getEmployees() {
    return this._http.get('http://localhost:3000/employees');
  }

  addEmployee(data: Employee) {
    return this._http.post('http://localhost:3000/employees', data);
  }

  updateEmployee(id: number, data: Employee) {
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }

  deleteEmployee(id: number) {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }
}
