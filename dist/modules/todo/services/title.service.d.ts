import { Title } from '../entities/title.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
export declare class TitleService extends TypeOrmCrudService<Title> {
    constructor(titleRepository: any);
}
