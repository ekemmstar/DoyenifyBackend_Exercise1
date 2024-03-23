import { Injectable } from '@nestjs/common';
import { Students } from '../students.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  delete(id: number) {
    this.studentRepository.delete(id);
  }
  update(id: number, student: Students): Promise<Student> {
    this.studentRepository.update(id, student);
    const firstStudent = this.studentRepository.findOneBy({
      id: id,
    });
    return firstStudent;
  }
  retrieve(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  create(student: Students) {
    const newStudent = this.studentRepository.create(student);
    this.studentRepository.save(newStudent);
  }
}

// STUDENTS((student) => student.id === inputID);
