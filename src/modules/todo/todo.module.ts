import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodoController } from './controllers/todo.controller';
import { TitleController } from './controllers/title.controller';
import { TodoService } from './services/todo.service';
import { TitleService } from './services/title.service';
import { Title } from './entities/title.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), TypeOrmModule.forFeature([Title])],
  controllers: [TodoController, TitleController],
  providers: [TodoService, TitleService],
})
export class TodoModule {}
