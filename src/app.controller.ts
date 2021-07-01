import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller("user")
export class AppController {
  constructor() { }

  @UseGuards(AuthGuard('jwt'))
  @Get("profile")
  getUser(@Request() req): any {
    const { name, sub: id, picture, email = "" } = req.user;
    return { name, id, picture, email };
  }
}
