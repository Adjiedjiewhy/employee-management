import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonMainComponent } from '../button-main/button-main.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-main',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-main.component.html',
  styleUrl: './input-main.component.css',
})
export class InputMainComponent {
  @Input() parentForm!: FormGroup;
  @Input() controlName!: string;
  @Input() inputType!: string;
  @Input() labelText!: string;

  handleInputString(event: any) {
    this.parentForm.controls[this.controlName].setValue(event.target.value);
  }
}
