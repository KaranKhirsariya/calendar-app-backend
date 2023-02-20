import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TodoListsService } from './todo-lists.service';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { FindTodoListQueryDto } from './dto/find-todo-list.dto';

@Controller('todo-lists')
export class TodoListsController {
  constructor(private readonly todoListsService: TodoListsService) {}

  // @Post()
  // create(@Body() createTodoListDto: CreateTodoListDto) {
  //   return this.todoListsService.create(createTodoListDto);
  // }

  @Get()
  findAll(@Query() query: FindTodoListQueryDto) {
    if (query.year != undefined && query.month != undefined) {
      return this.todoListsService.findByMonthYear({
        year: query.year,
        month: query.month,
      });
    }
    return this.todoListsService.findAll();
  }

  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.todoListsService.findOne(uid);
  }

  @Patch(':uid')
  update(
    @Param('uid') uid: string,
    @Body() updateTodoListDto: UpdateTodoListDto,
  ) {
    return this.todoListsService.update(uid, updateTodoListDto);
  }

  @Delete(':uid')
  remove(@Param('uid') uid: string) {
    return this.todoListsService.remove(uid);
  }
}
