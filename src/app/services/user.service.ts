import { User } from "../data/types";
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

    isCurrentUserEmpty(): boolean{
        console.log("User:", this.currentUser);
        return this.currentUser.username !== undefined && this.currentUser.password !== undefined
    }

    resetUser(): void{
        this.currentUser = {} as User;
    }

}