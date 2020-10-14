import { Todo } from '../entities/todo.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
export declare class TodoService extends TypeOrmCrudService<Todo> {
    constructor(todoRepository: any);
}
