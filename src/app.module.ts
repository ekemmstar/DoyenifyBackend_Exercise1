import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';

@Module({
  imports: [],
  controllers: [AppController, DeckController],
  providers: [AppService, DeckService],
})
export class AppModule {}
