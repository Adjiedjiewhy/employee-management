import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ButtonMainComponent } from '../../components/button-main/button-main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isModalVisible = false;
  modalMsg = {
    title: 'Default Title',
    message: 'Default Message',
  };
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private user: UserService) {
  }

  handleLogin() {
    console.log("Login")
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
    this.user.setCurrentUser("admin", "admin")
    this.router.navigateByUrl('/list');
  }

  handleNoData() {
    this.isModalVisible = true;
    this.modalMsg.title = 'Missing Login Details';
    this.modalMsg.message = 'Please input in your login details!';
  }

  handleInvalidData() {
    this.isModalVisible = true;
    this.modalMsg.title = 'Invalid Login Details';
    this.modalMsg.message = 'Please input the appropriate login details!';
  }

  handleForgot() {
    console.log('Do Forgot!');
    this.isModalVisible = true;
    this.modalMsg.title = 'Forgot Password';
    this.modalMsg.message = '[Username: admin] [Password: admin]';
  }

  toggleModalOff() {
    this.isModalVisible = false;
  }

  myCallbackFunction = (args: any): void => {
    console.log("Callback!")
  }
}
