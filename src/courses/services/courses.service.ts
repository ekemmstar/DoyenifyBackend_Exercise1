import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../entities/course.entity';
import { Courses } from '../courses.interface';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  delete(id: number) {
    this.courseRepository.delete(id);
  }
  update(id: number, course: Courses): Promise<Course> {
    this.courseRepository.update(id, course);
    const firstCourse = this.courseRepository.findOneBy({
      id: id,
    });
    return firstCourse;
  }
  retrieve(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  create(course: Courses) {
    const newCourse = this.courseRepository.create(course);
    this.courseRepository.save(newCourse);
  }
}

// STUDENTS((student) => student.id === inputID);
