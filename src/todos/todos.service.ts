import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}
  async create(createTodoDto: CreateTodoDto) {
    return this.prisma.toDo.create({
      data: {
        title: createTodoDto.title,
        description: createTodoDto.description,
        list: {
          connectOrCreate: {
            where: {
              uid: createTodoDto.listId || '',
            },
            create: {
              dueDate: dayjs(createTodoDto.dueDate).startOf('day').toDate(),
            },
          },
        },
      },
      select: {
        uid: true,
        description: true,
        title: true,
        list: { select: { uid: true, dueDate: true } },
      },
    });
  }

  // findAll() {
  //   return `This action returns all todos`;
  // }

  findOne(uid: string) {
    return this.prisma.toDo.findFirstOrThrow({
      where: { uid: uid },
      select: {
        uid: true,
        description: true,
        title: true,
        list: { select: { uid: true, dueDate: true } },
      },
    });
  }

  update(uid: string, updateTodoDto: UpdateTodoDto) {
    return this.prisma.toDo.update({
      where: { uid: uid },
      data: updateTodoDto,
      select: {
        uid: true,
        description: true,
        title: true,
        list: { select: { uid: true, dueDate: true } },
      },
    });
  }

  remove(uid: string) {
    return this.prisma.toDo.delete({
      where: { uid: uid },
      select: {
        uid: true,
      },
    });
  }
}
