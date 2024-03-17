import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';
import { sampleModule } from './sample.module';
import { StudentsController } from './students/students.controller';
import { StudentsService } from './students/students.service';
import { StudentsModule } from './students/students.module';


@Module({
  imports: [sampleModule, StudentsModule],
  controllers: [AppController, DeckController, StudentsController],
  providers: [AppService, DeckService, StudentsService],
})
export class AppModule {}
