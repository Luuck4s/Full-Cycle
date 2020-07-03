import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lives } from './lives.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite3',
      entities: [__dirname + '/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Lives]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
