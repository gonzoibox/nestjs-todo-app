"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const title_service_1 = require("../services/title.service");
const title_entity_1 = require("../entities/title.entity");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
let TitleController = class TitleController {
    constructor(service) {
        this.service = service;
    }
};
TitleController = __decorate([
    crud_1.Crud({
        model: {
            type: title_entity_1.Title
        }
    }),
    swagger_1.ApiTags('title'),
    common_1.Controller('rest/title'),
    __metadata("design:paramtypes", [title_service_1.TitleService])
], TitleController);
exports.TitleController = TitleController;
//# sourceMappingURL=title.controller.js.map