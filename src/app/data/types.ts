export enum StyleTypes {
    default = "DEFAULT",
    warning = "WARNING",
    danger = "DANGER"
}
export interface ModalContent {
    title: string;
    message: string;
    buttonTxt: string;
    modalType: StyleTypes;
}

export interface Employee {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    birthDate: Date,
    basicSalary: number,
    status: string,
    group: string,
    description: Date,
}

export interface User{
    username: string,
    password: string
}

export interface Styling{
    key: string,
    styles: string
}

export interface Dropdown{
    value: string,
    text: string
}