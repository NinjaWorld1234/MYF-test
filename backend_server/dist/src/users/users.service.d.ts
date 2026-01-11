import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
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
    findByEmail(email: string): Promise<{
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
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
