import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  handleLogin(){
    if(this.loginForm.invalid){
      return;
    }
    this.router.navigateByUrl("/list");
  }

  handleForgot(){
    console.log("Do Forgot!")
  }
}
