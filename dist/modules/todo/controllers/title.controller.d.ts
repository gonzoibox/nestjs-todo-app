import { TitleService } from '../services/title.service';
import { Title } from '../entities/title.entity';
import { CrudController } from '@nestjsx/crud';
export declare class TitleController implements CrudController<Title> {
    service: TitleService;
    constructor(service: TitleService);
}
