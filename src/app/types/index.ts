export interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    photo?: string | null;
}