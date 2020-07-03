import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lives } from './lives.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Lives)
    private LivesRepository: Repository<Lives>,
  ) {}

  getHello(): string {
    return 'Challenger 5!!!';
  }

  async getLives(): Promise<Lives[]> {
    return await this.LivesRepository.find();
  }
}
