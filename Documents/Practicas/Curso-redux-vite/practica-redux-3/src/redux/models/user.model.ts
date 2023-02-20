export interface User {
    username: string,
    email: string,
    token:string
    password:number
}

export const userEmpty :Partial<User>= {
    username :"",
    email: "",
    token:""
}