import { Component, Output, EventEmitter } from '@angular/core';
import { ButtonMainComponent } from '../button-main/button-main.component';

@Component({
  selector: 'app-table-actions',
  standalone: true,
  imports: [ButtonMainComponent],
  templateUrl: './table-actions.component.html',
  styleUrl: './table-actions.component.css'
})
export class TableActionsComponent {
  @Output() clickEventL = new EventEmitter();
  @Output() clickEventC = new EventEmitter();
  @Output() clickEventR = new EventEmitter();

  clickMethodL(): void{
    this.clickEventL.emit();
  }

  clickMethodC(): void{
    this.clickEventC.emit();
  }

  clickMethodR(): void{
    this.clickEventR.emit();
  }
}
