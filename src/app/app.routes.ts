import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Employee Management"
    },
    {
        path: "list",
        component: ListComponent,
        title: "Employee Management / List",
        canActivate: [AuthGuardService]
    },
    {
        path: "details",
        component: DetailsComponent,
        title: "Employee Management / Details",
        canActivate: [AuthGuardService]
    },
    {
        path: "new",
        component: NewComponent,
        title: "Employee Management / Add New",
        canActivate: [AuthGuardService]
    }
];

export default routes;