import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { UserService } from "./user.service";
import { Router } from '@angular/router';

export const AuthGuardService: CanActivateFn = (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean =>{
        const user: UserService = inject(UserService);
        const router: Router = inject(Router)

        if(user.isUserLoggedIn()){
            return true;
        }
        else{
            // router.navigateByUrl("");
            return true;
        }
}