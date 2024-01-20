import { Component } from '@angular/core';
import { EMPLOYEES } from '../data/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  employees: any;

  ngOnInit() {
    this.employees = [...EMPLOYEES];
    console.log(this.employees[69]);
  }
}
