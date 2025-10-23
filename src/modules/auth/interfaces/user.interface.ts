import { AuthController } from "../auth.controller";

export interface User { 
    id?: number;
    name?: string;
    email: string;
    password: string
}

