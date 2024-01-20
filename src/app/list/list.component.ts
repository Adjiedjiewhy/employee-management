import { Component } from '@angular/core';
import { EMPLOYEES } from '../data/constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  employees = EMPLOYEES;
  itemPerPage = 10;
  currentPage = 0;
  totalPages = 0;

  searchQuery = '';
  statusSelect = '';
  groupSelect = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.handleChangeItemsPerPage();
  }

  adjustTableData() {
    this.employees = EMPLOYEES.slice(
      this.itemPerPage * this.currentPage - this.itemPerPage,
      this.itemPerPage * this.currentPage
    );
  }

  handleChangeItemsPerPage() {
    this.totalPages = EMPLOYEES.length / this.itemPerPage;
    this.currentPage = 1;
    this.adjustTableData();
  }

  handleSearch() {
    console.log('Search:', this.searchQuery);
    this.employees = EMPLOYEES.filter((employee) => {
      return Object.values(employee).some((value) =>
        String(value).toLowerCase().includes(this.searchQuery)
      );
    });
  }

  handleStatusFilter() {
    console.log('Status:', this.statusSelect);
    this.employees = EMPLOYEES.filter((employee) => {
      return employee.status.toLowerCase() === this.statusSelect;
    });
  }

  handleGroupFilter() {
    console.log('Group:', this.groupSelect);
    this.employees = EMPLOYEES.filter((employee) => {
      return employee.group.toLowerCase() === this.groupSelect;
    });
  }

  searchData() {}

  handleNextPage() {
    if (this.currentPage === this.totalPages) return;

    this.currentPage++;
    this.adjustTableData();
  }

  handlePrevPage() {
    if (this.currentPage === 1) return;

    this.currentPage--;
    this.adjustTableData();
  }

  handleGoToDetails(employeeData: object) {    
    this.router.navigateByUrl('/details', { state: { employeeData: employeeData } });
  }

  handleGoToNewEmployee() {
    this.router.navigateByUrl('/new');
  }

  handleEdit() {
    console.log('Do Edit');
  }

  handleDelete() {
    console.log('Do Delete');
  }
}
