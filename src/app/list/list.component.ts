import { Component } from '@angular/core';
import { EMPLOYEES } from '../data/constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NewEmployeeData } from '../data/types';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  isModalVisible = false;
  isAction = true;
  modalMsg = {
    title: 'Default Title',
    message: 'Default Message',
  };

  employees = EMPLOYEES;
  currentPageData = [] as NewEmployeeData[];
  itemPerPage = 10;
  currentPage = 0;
  totalPages = 0;

  searchQuery = '';
  statusSelect = '';
  groupSelect = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (history.state.filters !== undefined) {
      this.searchQuery = history.state.filters[0];
      this.statusSelect = history.state.filters[1];
      this.groupSelect = history.state.filters[2];
    }

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
      if (this.searchQuery) {
        tempData = this.handleSearch(tempData);
      }
      if (this.statusSelect && this.statusSelect !== 'any') {
        tempData = this.handleStatusFilter(tempData);
      }
      if (this.groupSelect && this.groupSelect !== 'any') {
        tempData = this.handleGroupFilter(tempData);
      }
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

  handleSearch(tempData: NewEmployeeData[]) {
    return tempData.filter((employee: NewEmployeeData) => {
      return Object.values(employee).some((value) =>
        String(value).toLowerCase().includes(this.searchQuery)
      );
    });
  }

  handleStatusFilter(tempData: NewEmployeeData[]) {
    return tempData.filter((employee: NewEmployeeData) => {
      return employee.status.toLowerCase() === this.statusSelect;
    });
  }

  handleGroupFilter(tempData: NewEmployeeData[]) {
    return tempData.filter((employee: NewEmployeeData) => {
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

  handleGoToDetails(employeeData: NewEmployeeData) {
    this.router.navigateByUrl('/details', {
      state: {
        employeeData: employeeData,
        filters: [this.searchQuery, this.statusSelect, this.groupSelect],
      },
    });
  }

  handleGoToNewEmployee() {
    this.router.navigateByUrl('/new');
  }

  handleEdit() {
    console.log('Do Edit');
    this.isModalVisible = true;
    this.isAction = true;
    this.modalMsg.title = 'Editing Employee Data';
    this.modalMsg.message = 'Currently editing employee details!';
  }

  handleDelete() {
    console.log('Do Delete');
    this.isModalVisible = true;
    this.isAction = false;
    this.modalMsg.title = 'Deleting Employee Data';
    this.modalMsg.message = 'Employee deletion in progress!';
  }

  toggleModalOff() {
    this.isModalVisible = false;
  }
}
