import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewEmployeeData } from '../data/types';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  employee = {} as NewEmployeeData;

  constructor(private router: Router) {}

  ngOnInit() {
    this.employee = history.state.employeeData;
  }

  handleBack() {
    this.router.navigateByUrl('/list', {
      state: {
        filters: history.state.filters,
      },
    });
  }
}
