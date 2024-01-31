import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor() {}

  doFilterData() {}

  doSortData(data: any[], sortingInfo: any): any[] | null {
    switch (sortingInfo.column) {
      case 'birthDate':
        console.log("Object");
        return this.sortDate(data, sortingInfo);
      case 'string':
      default:
        console.log("String");
        return this.sortString(data, sortingInfo);
    }
  }

  sortString(data: any[], sortingInfo: any) {
    switch (sortingInfo.sortType) {
      case 'asc': {
        return data.sort((a, b) =>
          a[sortingInfo.column].localeCompare(b[sortingInfo.column])
        );
      }
      case 'desc': {
        return data.sort((a, b) =>
          b[sortingInfo.column].localeCompare(a[sortingInfo.column])
        );
      }
      default:
        return null;
    }
  }

  sortDate(data: any[], sortingInfo: any) {
    switch (sortingInfo.sortType) {
      case 'asc': {
        return data.sort(
          (a, b) => a.birthDate.getTime() - b.birthDate.getTime()
        );
      }
      case 'desc': {
        return data.sort(
          (a, b) => b.birthDate.getTime() - a.birthDate.getTime()
        );
      }
      default:
        return null;
    }
  }
}
