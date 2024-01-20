export class Employees{
    private username: string;
    private firstName: string;
    private lastName: string;
    private email: string;
    private birthDate: Date;
    private basicSalary: Number;
    private status: string;
    private group: string;
    private description: Date;

    constructor(param: any) {
        this.username = param;
        this.firstName = param;
        this.lastName = param;
        this.email = param;
        this.birthDate = param;
        this.basicSalary = param;
        this.status = param;
        this.group = param;
        this.description = param;
      }
}