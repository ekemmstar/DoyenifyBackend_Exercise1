import { Injectable } from '@nestjs/common';

@Injectable()
export class DeckService {
  createDeck() {
      const jsonString = 
        {
            "deckId": "521b0293-01f7-44c2-9990-27079eb2352d",
            "type": "FULL",
            "shuffled": true,
            "remaining": 52
           }
      
    return jsonString;
  }
  postHello(): string {
    return 'Hello World!';
  }
 
}
