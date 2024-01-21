import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { EMPLOYEES } from '../data/constants';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  isModalVisible = false;
  modalMsg = {
    title: 'Default Title',
    message: 'Default Message',
  };

  employeeForm = this.formBuilder.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    birthDate: [new Date(), Validators.required],
    basicSalary: ['', Validators.required],
    status: ['', Validators.required],
    group: ['', Validators.required],
    description: [new Date(), Validators.required],
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

  constructor(private router: Router, private formBuilder: FormBuilder) {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
  }

  handleSubmit() {
    if (this.employeeForm.invalid) {
      console.log('Invalid!');
      this.handleNoData();
      return;
    }
    if(!this.regex.test(this.employeeForm.value.email!)){
      console.log('Invalid!');
      this.handleInvalidEmail();
      return;
    }

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
      this.employeeForm.value.description as Date
    )
      .toISOString()
      .toString();

    EMPLOYEES.push(this.newEmployee);
    this.handleSuccess();
  }

  handleBack() {
    this.router.navigateByUrl('/list');
  }

  handleSuccess(){
    this.isModalVisible = true;
    this.modalMsg.title = 'Success';
    this.modalMsg.message = 'New employee data has been added to the database!';
    this.employeeForm.reset();
  }

  handleNoData() {
    this.isModalVisible = true;
    this.modalMsg.title = 'Missing Information';
    this.modalMsg.message = 'Please fill out all the inputs!';
  }

  handleInvalidEmail() {
    this.isModalVisible = true;
    this.modalMsg.title = 'Invalid E-mail';
    this.modalMsg.message = 'Please input a valid email address!';
  }

  toggleModalOff() {
    this.isModalVisible = false;
  }
}
