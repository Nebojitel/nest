import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  constructor() {}
  @Get('/Hi')
  getRootRoute() {
    return 'Hi there';
  }

  @Get('/Bye')
  getByeThere() {
    return 'Bye there';
  }
}
