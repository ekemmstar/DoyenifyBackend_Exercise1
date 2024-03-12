import { Controller, Get, Post, Put } from '@nestjs/common';
import { DeckService } from './deck.service';


@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  //creating a 3 API that create,draw and open
  @Post()
  createDeck(){ 
    return this.deckService.createDeck();
  }
  @Put()
  openDeck(){ 
    return this.deckService.createDeck();
  }
  
//   @Get()
//   openDeck(){
//     return this.deckService.createDeck();
//   }
  
  @Get()
  drawCard(){
    return this.deckService.createDeck();
  }

 
}
