import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    const students = ['Blessing', 'Jenny', 'Faith']
    return students;
  }
  postHello(): string {
    return 'Hello World!';
  }
  putHello(): string {
    return 'Hello World!';
  }
  deleteHello(): string {
    return 'Hello World!';
  }
}
