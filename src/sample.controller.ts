import { Controller, Get, Post, Put, Delete } from '@nestjs/common';


@Controller('sample')
export class SampleController {

  //creating a 3 API that create,draw and open
  @Post()
  createOrder():string{ 
    return 'Successful';
  }
  @Put()
  updateOrder():string{ 
    return 'Successful';
  }
  
  @Get()
  retrieveOrder():string{
    return 'Successful';
  }
  
  @Delete()
  deleteOrder():string{
    return 'Successful';
  }

 
}