import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  // @Get()
  // findAll() {
  //   return this.todosService.findAll();
  // }

  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.todosService.findOne(uid);
  }

  @Patch(':uid')
  update(@Param('uid') uid: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(uid, updateTodoDto);
  }

  @Delete(':uid')
  remove(@Param('uid') uid: string) {
    return this.todosService.remove(uid);
  }
}
