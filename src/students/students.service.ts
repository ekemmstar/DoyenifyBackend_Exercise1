import { Injectable } from '@nestjs/common';
import { Students } from './students.interface';
import { students } from './students.seed';

@Injectable()
export class StudentsService {
  private students: Students[] = [...students];

  delete(): string[] {
    throw new Error('Method not implemented.');
  }
  update(id: number, student: Students): Students {
    console.log(id);
    const studentIndex = this.students.findIndex(s => s.id === id);
    console.log(studentIndex);

    this.students[studentIndex] = student;
    console.log(this.students);
    return this.students[studentIndex];
  }
  retrieve(): Students[] {
    return this.students;
  }

  create(student: Students) {
    this.students.push(student);
  }
}
