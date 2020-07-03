import { Controller, Get } from '@nestjs/common';
import { Lives } from './lives.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/maratona")
  getLives(): Promise<Lives[]> {
    return this.appService.getLives();
  }
}

