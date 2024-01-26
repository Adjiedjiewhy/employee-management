import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Employee } from '../../data/types';
import { ButtonMainComponent } from '../../components/button-main/button-main.component';
import { EmployeeDataTextComponent } from '../../components/employee-data-text/employee-data-text.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ButtonMainComponent, EmployeeDataTextComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  employee = {} as Employee;

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
