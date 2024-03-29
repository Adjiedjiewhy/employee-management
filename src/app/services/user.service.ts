import { User } from "../data/types";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{
    currentUser = {} as User;

    setCurrentUser(username: string, password: string): void{
        this.currentUser = {
            username: username,
            password: password
        }
    }

    getCurrentUser(): User{
        return this.currentUser;
    }

    isUserLoggedIn(): boolean{
        return this.currentUser.username !== undefined && this.currentUser.password !== undefined
    }

    resetUser(): void{
        this.currentUser = {} as User;
    }

}