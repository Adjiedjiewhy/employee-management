import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';
import { NewComponent } from './pages/new/new.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Employee Management"
    },
    {
        path: "list",
        title: "Employee Management / List",
        canActivate: [AuthGuardService],
        loadComponent: () => import('./pages/list/list.component').then((m) => m.ListComponent)
    },
    {
        path: "details",
        title: "Employee Management / Details",
        canActivate: [AuthGuardService],
        loadComponent: () => import('./pages/details/details.component').then((m) => m.DetailsComponent)
    },
    {
        path: "new",
        title: "Employee Management / Add New",
        canActivate: [AuthGuardService],
        loadComponent: () => import('./pages/new/new.component').then((m) => m.NewComponent)

    }
];

export default routes;