import { Injectable } from "@angular/core";
import { User } from "../data/types";

export class UserService{
    currentUser = {} as User;

    setCurrentUser(username: string, password: string){
        this.currentUser = {
            username: username,
            password: password
        }
    }

    getCurrentUser(){
        return this.currentUser;
    }

    resetUser(){
        this.currentUser = {} as User;
    }

}