import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Employees } from '../../data/types';
import { ButtonMainComponent } from '../../components/button-main/button-main.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ButtonMainComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  employee = {} as Employees;

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
