import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Students } from './students.interface';
import { StudentsService } from './services/students.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get()
  retrieveStudent(): Promise<Student[]> {
    return this.studentService.retrieve();
  }

  @Post()
  createStudent(@Body() student: Students) {
    this.studentService.create(student);
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: number,
    @Body() student: Students,
  ): Promise<Student> {
    return this.studentService.update(id, student);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    return this.studentService.delete(id);
  }
}
