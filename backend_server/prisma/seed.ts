import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Create Users
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

        // Create Courses
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
    } catch (e) {
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
