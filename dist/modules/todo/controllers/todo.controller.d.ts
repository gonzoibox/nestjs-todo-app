import { TodoService } from '../services/todo.service';
import { Todo } from '../entities/todo.entity';
import { CrudController } from '@nestjsx/crud';
export declare class TodoController implements CrudController<Todo> {
    service: TodoService;
    constructor(service: TodoService);
}
