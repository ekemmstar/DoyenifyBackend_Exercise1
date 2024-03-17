import { Injectable } from '@nestjs/common';
import { Students } from './students.interface';
import { students } from './students.seed';

@Injectable()
export class StudentsService {
    private students: Students[] = [...students]

    delete(): string[] {
        throw new Error('Method not implemented.');
    }
    update(): string[] {
        throw new Error('Method not implemented.');
    }
    retrieve(): Students[]{
        return this.students 
    }

    create(student : Students){
        this.students.push(student)

    }
}
