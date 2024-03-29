import { Component } from '@angular/core';
import {
  EMPLOYEES,
  DROPDOWNS_STATUS,
  DROPDOWNS_GROUP,
} from '../../data/constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalContent, Employee, StyleTypes } from '../../data/types';
import { TableActionsComponent } from '../../components/table-actions/table-actions.component';
import { PaginationControlsComponent } from '../../components/pagination-controls/pagination-controls.component';
import { ButtonMainComponent } from '../../components/button-main/button-main.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableActionsComponent,
    PaginationControlsComponent,
    ButtonMainComponent,
    AlertComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  isModalVisible = false;
  isAction = true;
  modalContent!: ModalContent;

  employees = [...EMPLOYEES];
  groups = DROPDOWNS_GROUP;
  statuses = DROPDOWNS_STATUS;

  currentPageData = [] as Employee[];
  itemPerPage = 10;
  currentPage = 0;
  totalPages = 0;

  searchQuery: string = '';
  statusSelect: string = '';
  groupSelect: string = '';

  sortingInfo = {
    column: '',
    sortType: '',
  };

  constructor(private router: Router, private tableService: TableService) {}

  ngOnInit() {
    if (history.state.filters !== undefined) {
      this.searchQuery = history.state.filters[0];
      this.statusSelect = history.state.filters[1];
      this.groupSelect = history.state.filters[2];
    }

    this.handleChangeItemsPerPage(undefined);
  }

  handleChangeItemsPerPage($event: number | undefined) {
    if ($event !== undefined) {
      this.itemPerPage = $event;
    }
    this.totalPages = Math.ceil(EMPLOYEES.length / this.itemPerPage);
    this.currentPage = 1;
    this.adjustTableData();
  }

  adjustTableData() {
    this.sortingInfo = {
      column: '',
      sortType: '',
    };
    this.currentPage = 1;
    let tempData = [...EMPLOYEES];
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
      this.employees = [...tempData];
    } else if (this.sortingInfo.column === '') {
      this.employees = [...EMPLOYEES];
    }

    this.adjustPagination();
    this.handlePageData();
  }

  adjustPagination() {
    this.totalPages = Math.ceil(this.employees.length / this.itemPerPage);
  }

  handleSearch(tempData: Employee[]) {
    return tempData.filter((employee: Employee) => {
      return Object.values(employee).some((value) =>
        String(value).toLowerCase().includes(this.searchQuery!.toLowerCase())
      );
    });
  }

  handleStatusFilter(tempData: Employee[]) {
    return tempData.filter((employee: Employee) => {
      return employee.status.toLowerCase() === this.statusSelect.toLowerCase();
    });
  }

  handleGroupFilter(tempData: Employee[]): Employee[] {
    return tempData.filter((employee: Employee) => {
      return employee.group.toLowerCase() === this.groupSelect.toLowerCase();
    });
  }

  handleSorting(columnName: string): void {
    this.currentPage = 1;
    this.manageSortingInfo(columnName);
    let sortedData = this.tableService.doSortData(
      this.employees,
      this.sortingInfo
    );
    if (sortedData !== null) {
      this.employees = [...sortedData];
      this.adjustPagination();
      this.handlePageData();
    } else {
      this.adjustTableData();
    }
  }

  manageSortingInfo(columnName: string): void {
    if (
      this.sortingInfo.column === '' ||
      this.sortingInfo.column !== columnName
    ) {
      this.sortingInfo = {
        column: columnName,
        sortType: 'asc',
      };
    } else if (this.sortingInfo.column === columnName) {
      this.sortingInfo.sortType === 'asc'
        ? (this.sortingInfo.sortType = 'desc')
        : (this.sortingInfo = { column: '', sortType: '' });
    }
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

  handleGoToDetails(employeeData: Employee) {
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
    this.isModalVisible = true;
    this.isAction = true;

    this.modalContent = {
      title: 'Editing Employee Data',
      message: 'Currently editing employee details!',
      buttonTxt: 'OK',
      modalType: StyleTypes.warning,
    };
  }

  handleDelete() {
    this.isModalVisible = true;
    this.isAction = false;

    this.modalContent = {
      title: 'Deleting Employee Data',
      message: 'Employee deletion in progress!',
      buttonTxt: 'OK',
      modalType: StyleTypes.danger,
    };
  }

  toggleModalOff() {
    this.isModalVisible = false;
  }
}
