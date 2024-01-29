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
import { EMPLOYEES } from '../../data/constants';
import { ModalContent, Employee, StyleTypes } from '../../data/types';
import { ButtonMainComponent } from '../../components/button-main/button-main.component';
import { InputMainComponent } from '../../components/input-main/input-main.component';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonMainComponent, InputMainComponent, AlertComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  validEmailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  isModalVisible = false;
  modalContent!: ModalContent;

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

  newEmployee: Employee = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    birthDate: new Date(),
    basicSalary: 0,
    status: '',
    group: '',
    description: new Date(),
  }
  maxDate?: string;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
  }

  handleSubmit() {
    if (this.employeeForm.invalid) {
      this.handleNoData();
      return;
    }
    if(!this.validEmailFormat.test(this.employeeForm.value.email!)){
      this.handleInvalidEmail();
      return;
    }

    this.newEmployee = {
      username: this.employeeForm.value.username!,
      firstName: this.employeeForm.value.firstName!,
      lastName: this.employeeForm.value.lastName!,
      email: this.employeeForm.value.email!,
      birthDate: this.employeeForm.value.birthDate as Date,
      basicSalary:parseInt(
        this.employeeForm.value.basicSalary!
      ),
      status: this.employeeForm.value.status!,
      group: this.employeeForm.value.group!,
      description: this.employeeForm.value.description as Date
    }

    EMPLOYEES.push(this.newEmployee);
    this.handleSuccess();
  }

  handleBack() {
    this.router.navigateByUrl('/list');
  }

  handleSuccess(){
    this.isModalVisible = true;

    this.modalContent = {
      title: 'Success',
      message: 'New employee data has been added to the database!',
      buttonTxt: 'OK',
      modalType: StyleTypes.default,
    };
    this.employeeForm.reset();
  }

  handleNoData() {
    this.isModalVisible = true;

    this.modalContent = {
      title: 'Missing Information',
      message: 'Please fill out all the inputs!',
      buttonTxt: 'OK',
      modalType: StyleTypes.default,
    };
  }

  handleInvalidEmail() {
    this.isModalVisible = true;

    this.modalContent = {
      title: 'Invalid E-mail',
      message: 'Please input a valid email address!',
      buttonTxt: 'OK',
      modalType: StyleTypes.default,
    };
  }

  toggleModalOff() {
    this.isModalVisible = false;
  }
}
