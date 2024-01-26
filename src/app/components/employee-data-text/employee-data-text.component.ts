import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-data-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-data-text.component.html',
  styleUrl: './employee-data-text.component.css'
})
export class EmployeeDataTextComponent {
  @Input() detailLabel: string | undefined;
  @Input() detailInfo:  any;
  @Input() detailType: string | undefined;
}
