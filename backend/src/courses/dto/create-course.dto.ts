export class CreateCourseDto {
    title: string;
    titleEn?: string;
    instructor: string;
    instructorEn?: string;
    description?: string;
    descriptionEn?: string;
    thumbnail?: string;
    videoUrl?: string;
    duration?: string;
    category?: string;
    lessonsCount?: number;
    status?: string;
}
