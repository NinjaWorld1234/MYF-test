export class CreateUserDto {
    email: string;
    password?: string;
    name: string;
    role?: string; // 'admin' | 'student'
}
