"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todo_entity_1 = require("./entities/todo.entity");
const todo_controller_1 = require("./controllers/todo.controller");
const title_controller_1 = require("./controllers/title.controller");
const todo_service_1 = require("./services/todo.service");
const title_service_1 = require("./services/title.service");
const title_entity_1 = require("./entities/title.entity");
let TodoModule = class TodoModule {
};
TodoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([todo_entity_1.Todo]), typeorm_1.TypeOrmModule.forFeature([title_entity_1.Title])],
        controllers: [todo_controller_1.TodoController, title_controller_1.TitleController],
        providers: [todo_service_1.TodoService, title_service_1.TitleService],
    })
], TodoModule);
exports.TodoModule = TodoModule;
//# sourceMappingURL=todo.module.js.map