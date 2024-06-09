import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';
import { StudentsModule } from './students/students.module';
import { Student } from './students/entities/student.entity';
import { CoursesModule } from './courses/course.module';
import { Course } from './courses/entities/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Student, Course],
      synchronize: true,
    }),
    StudentsModule,
    CoursesModule,
  ],
  controllers: [AppController, DeckController],
  providers: [AppService, DeckService],
})
export class AppModule {}
