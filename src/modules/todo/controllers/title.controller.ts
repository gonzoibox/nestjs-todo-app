import { Controller } from '@nestjs/common';
import { TitleService } from '../services/title.service';
import { Title } from '../entities/title.entity';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

@Crud({
  model: {
    type: Title
  }
})
@ApiTags('title')
@Controller('rest/title')
export class TitleController implements CrudController<Title> {
  constructor(public service: TitleService) {}
}
