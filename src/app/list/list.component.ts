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
  currentPageData: any;
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

  handleChangeItemsPerPage() {
    this.totalPages = Math.ceil(EMPLOYEES.length / this.itemPerPage);
    this.currentPage = 1;
    this.adjustTableData();
  }

  adjustTableData() {
    this.currentPage = 1;
    let tempData = EMPLOYEES;
    if (this.searchQuery || this.statusSelect || this.groupSelect) {
      console.log('FILTER!');
      if (this.searchQuery) {
        tempData = this.handleSearch(tempData);
      }
      if (this.statusSelect && this.statusSelect !== 'any') {
        tempData = this.handleStatusFilter(tempData);
      }
      if (this.groupSelect && this.groupSelect !== 'any') {
        tempData = this.handleGroupFilter(tempData);
      }
      console.log('TD:', tempData);
      this.employees = tempData;
    } else {
      this.employees = EMPLOYEES;
    }

    this.adjustPagination();
    this.handlePageData();
  }

  adjustPagination() {
    this.totalPages = Math.ceil(this.employees.length / this.itemPerPage);
  }

  handleSearch(tempData: any) {
    return tempData.filter((employee: any) => {
      return Object.values(employee).some((value) =>
        String(value).toLowerCase().includes(this.searchQuery)
      );
    });
  }

  handleStatusFilter(tempData: any) {
    return tempData.filter((employee: any) => {
      return employee.status.toLowerCase() === this.statusSelect;
    });
  }

  handleGroupFilter(tempData: any) {
    return tempData.filter((employee: any) => {
      return employee.group.toLowerCase() === this.groupSelect;
    });
  }

  handleNextPage() {
    if (this.currentPage === this.totalPages) return;

    this.currentPage++;
    this.handlePageData();
  }

  handlePrevPage() {
    if (this.currentPage === 1) return;

    this.currentPage--;
    this.handlePageData();
  }

  handlePageData() {
    this.currentPageData = this.employees.slice(
      this.itemPerPage * this.currentPage - this.itemPerPage,
      this.itemPerPage * this.currentPage
    );
  }

  handleGoToDetails(employeeData: object) {
    this.router.navigateByUrl('/details', {
      state: { employeeData: employeeData },
    });
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
