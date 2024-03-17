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
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get()
  retrieveStudent(): Students[] {
    return this.studentService.retrieve();
  }

  @Post()
  createStudent(@Body() student: Students) {
    this.studentService.create(student);
  }

  @Put(':id')
  updateStudent(@Param('id') id: number, @Body() student: Students): Students {
    return this.studentService.update(id, student);
  }

  @Delete()
  deleteStudent(): string[] {
    return this.studentService.delete();
  }
}
