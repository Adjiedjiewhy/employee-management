import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { Injectable, inject } from "@angular/core";
import { UserService } from "./user.service";

export const AuthGuardService: CanActivateFn = (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean =>{
        const user: UserService = inject(UserService);
        let test = user.getCurrentUser();

        if(test.username === "admin" && test.password === "admin"){
            return true;
        }
        else{
            return false;
        }
}