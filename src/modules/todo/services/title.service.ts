import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Title } from '../entities/title.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class TitleService extends TypeOrmCrudService<Title> {
  constructor(@InjectRepository(Title) titleRepository) {
    super(titleRepository);
  }
}
