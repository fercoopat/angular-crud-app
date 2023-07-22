import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent {
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

  constructor(private _formBuilder: FormBuilder) {}

  onFormSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }

  isFieldValid(field: string) {
    const errors = this.myForm.get(field)?.errors;
    const touched = this.myForm.get(field)?.touched;
    if (errors!['required'] && touched) {
      this.errorMessage = 'This field is required!';
    }
  }
}
