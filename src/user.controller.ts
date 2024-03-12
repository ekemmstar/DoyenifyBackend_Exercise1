import { Controller, Get, Post, Put } from '@nestjs/common';


@Controller('users')
export class UsersController {

  //creating a 3 API that create,draw and open
  @Get()
  getusers(): string{ 
    return "My name is Joy";
  }
  @Put('id')
  updateuser(id:number): string{ 
    return "Updated";
  }
 
}
