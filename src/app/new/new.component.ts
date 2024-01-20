import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { EMPLOYEES } from '../data/constants';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    birthDate: new FormControl(new Date()),
    basicSalary: new FormControl(''),
    status: new FormControl(''),
    group: new FormControl(''),
    description: new FormControl(new Date()),
  });
  newEmployee = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    birthDate: '',
    basicSalary: 0,
    status: '',
    group: '',
    description: '',
  };
  maxDate?: string;

  constructor(private router: Router) {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
  }

  handleSubmit() {
    console.log('submit!');

    this.newEmployee.username = this.employeeForm.value.username!;
    this.newEmployee.firstName = this.employeeForm.value.firstName!;
    this.newEmployee.lastName = this.employeeForm.value.lastName!;
    this.newEmployee.email = this.employeeForm.value.email!;
    this.newEmployee.birthDate = new Date(
      this.employeeForm.value.birthDate as Date
    )
      .toISOString()
      .toString();
    this.newEmployee.basicSalary = parseInt(
      this.employeeForm.value.basicSalary!
    );
    this.newEmployee.status = this.employeeForm.value.status!;
    this.newEmployee.group = this.employeeForm.value.group!;
    this.newEmployee.description = new Date(
      this.employeeForm.value.birthDate as Date
    )
      .toISOString()
      .toString();

    EMPLOYEES.push(this.newEmployee);
  }

  handleBack() {
    this.router.navigateByUrl('/list');
  }
}
