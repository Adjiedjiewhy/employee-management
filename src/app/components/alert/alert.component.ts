import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContent } from '../../data/types';
import { ButtonMainComponent } from '../button-main/button-main.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [ButtonMainComponent, CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() modalContent!: ModalContent;
  @Input() modalVisibility!: boolean;

  @Output() buttonEvent = new EventEmitter();

  ngOnInit() {
    console.log('Content:', this.modalContent);
  }

  clickMethod() {
    this.buttonEvent.emit();
  }
}
