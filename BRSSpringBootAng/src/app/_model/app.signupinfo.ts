export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    deleteFlag:number;
    phoneNumber:string;
    userType:string;

    constructor(name: string, username: string, email: string, password: string,phoneNumber:string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['customer'];
        this.userType='C';
        this.deleteFlag=0;
        this.phoneNumber=phoneNumber;
    }
}
