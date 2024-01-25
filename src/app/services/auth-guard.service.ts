import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { UserService } from "./user.service";

export const AuthGuardService: CanActivateFn = (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean =>{
        return false;
}