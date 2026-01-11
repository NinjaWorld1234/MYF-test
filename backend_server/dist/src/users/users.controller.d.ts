import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        password: string;
        id: string;
        email: string;
        name: string;
        nameEn: string | null;
        role: string;
        avatar: string | null;
        points: number;
        level: number;
        streak: number;
        joinDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        password: string;
        id: string;
        email: string;
        name: string;
        nameEn: string | null;
        role: string;
        avatar: string | null;
        points: number;
        level: number;
        streak: number;
        joinDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        password: string;
        id: string;
        email: string;
        name: string;
        nameEn: string | null;
        role: string;
        avatar: string | null;
        points: number;
        level: number;
        streak: number;
        joinDate: Date;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
