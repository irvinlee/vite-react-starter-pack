export interface User {
    id: string;
    email: string;
}

export interface Session {
    user: User;
    token: string;
}