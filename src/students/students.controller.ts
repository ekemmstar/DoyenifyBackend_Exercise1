import { Controller , Get, Post, Put, Delete, Body} from '@nestjs/common';
import { Students } from './students.interface';
import { StudentsService } from './students.service';


@Controller('students')
export class StudentsController {
constructor(private readonly studentService: StudentsService) {}


  @Get()
  retrieveStudent(): Students [] {
    return this.studentService.retrieve();
  }

  @Post()
  createStudent(@Body() student : Students) {  
    this.studentService.create(student);
  }
  
  @Put()
  updateStudent(): string[] {
    return this.studentService.update();
  }
  
  @Delete()
  deleteStudent(): string[] {
    return this.studentService.delete();
  }
}