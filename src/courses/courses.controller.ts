import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CoursesService } from './services/courses.service';
import { Course } from './entities/course.entity';
import { Courses } from './courses.interface';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  retrieveStudent(): Promise<Course[]> {
    return this.courseService.retrieve();
  }

  @Post()
  createStudent(@Body() student: Courses) {
    this.courseService.create(student);
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: number,
    @Body() student: Courses,
  ): Promise<Course> {
    return this.courseService.update(id, student);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    return this.courseService.delete(id);
  }
}
