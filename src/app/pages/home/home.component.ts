import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StyleTypes, ModalContent } from '../../data/types';
import { UserService } from '../../services/user.service';
import { ButtonMainComponent } from '../../components/button-main/button-main.component';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ButtonMainComponent,
    AlertComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isModalVisible = false;
  modalContent!: ModalContent;

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private user: UserService
  ) {}

  handleLogin() {
    if (this.loginForm.invalid) {
      this.handleNoData();
      return;
    }
    if (
      this.loginForm.value.username !== 'admin' ||
      this.loginForm.value.password !== 'admin'
    ) {
      this.handleInvalidData();
      return;
    }
    this.user.setCurrentUser('admin', 'admin');
    this.router.navigateByUrl('/list');
  }

  handleNoData() {
    this.isModalVisible = true;

    this.modalContent = {
      title: 'Missing Login Details',
      message: 'Please input in your login details!',
      buttonTxt: 'OK',
      modalType: StyleTypes.default,
    };
  }

  handleInvalidData() {
    this.isModalVisible = true;

    this.modalContent = {
      title: 'Invalid Login Details',
      message: 'Please input the appropriate login details!',
      buttonTxt: 'OK',
      modalType: StyleTypes.default,
    };
  }

  handleForgot() {
    this.isModalVisible = true;

    this.modalContent = {
      title: 'Forgot Password',
      message: '[Username: admin] [Password: admin]',
      buttonTxt: 'OK',
      modalType: StyleTypes.default,
    };
  }

  toggleModalOff() {
    this.isModalVisible = false;
  }
}
