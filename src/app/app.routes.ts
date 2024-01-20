import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Employee Management"
    },
    {
        path: "list",
        component: ListComponent,
        title: "Employee Management / List"
    },
    {
        path: "details",
        component: DetailsComponent,
        title: "Employee Management / Details"
    },
    {
        path: "new",
        component: NewComponent,
        title: "Employee Management / Add New"
    }
];

export default routes;