export type ApplicationError = {
    name: string;
    message: string;
}

export type SignUp = {
    email: string;
    name: string;
    password: string;
    confirmPassword: string
}

export type SignIn = {
    email: string;
    password: string;
}