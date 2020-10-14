import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './modules/todo/todo.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    TodoModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
