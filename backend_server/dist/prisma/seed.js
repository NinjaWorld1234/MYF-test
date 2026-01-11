"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('Seeding database...');
    try {
        const password = await bcrypt.hash('password', 10);
        const student = await prisma.user.upsert({
            where: { email: 'ahmed@example.com' },
            update: {},
            create: {
                email: 'ahmed@example.com',
                name: 'أحمد محمد',
                nameEn: 'Ahmed Mohamed',
                password,
                role: 'student',
                avatar: 'https://ui-avatars.com/api/?name=Ahmed+M&background=064e3b&color=fff&size=100',
            },
        });
        const admin = await prisma.user.upsert({
            where: { email: 'admin@example.com' },
            update: {},
            create: {
                email: 'admin@example.com',
                name: 'مدير النظام',
                nameEn: 'System Admin',
                password,
                role: 'admin',
                avatar: 'https://ui-avatars.com/api/?name=Admin&background=5E35B1&color=fff&size=100',
            },
        });
        console.log({ student, admin });
        const coursesData = [
            {
                title: 'تفسير جزء عم',
                titleEn: 'Interpretation of Juz Amma',
                instructor: 'أ. بلال عبدالله',
                instructorEn: 'Prof. Bilal Abdullah',
                category: 'Quran',
                duration: '1h 50m',
                thumbnail: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=225&fit=crop',
                description: 'تفسير مبسط لجزء عم مع شرح معاني الكلمات',
                descriptionEn: 'Simplified interpretation of Juz Amma with word meanings',
                lessonsCount: 12,
                studentsCount: 245,
                status: 'published'
            },
            {
                title: 'فقه الصلاة',
                titleEn: 'Jurisprudence of Prayer',
                instructor: 'الشيخ أحمد',
                instructorEn: 'Sheikh Ahmed',
                category: 'Fiqh',
                duration: '4h 30m',
                thumbnail: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=400&h=225&fit=crop',
                description: 'شرح مفصل لأحكام الصلاة',
                descriptionEn: 'Detailed explanation of prayer rules',
                lessonsCount: 8,
                studentsCount: 312,
                status: 'published'
            }
        ];
        for (const c of coursesData) {
            await prisma.course.create({ data: c });
        }
        console.log('Seeding completed.');
    }
    catch (e) {
        console.error('Seeding error:', e);
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map