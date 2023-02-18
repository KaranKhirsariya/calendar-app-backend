import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';

@Injectable()
export class TodoListsService {
  constructor(private prisma: PrismaService) {}

  create(createTodoListDto: CreateTodoListDto) {
    return this.prisma.toDoList.create({
      data: { dueDate: new Date(createTodoListDto.dueDate.slice(0, 10)) },
    });
  }

  findAll() {
    return this.prisma.toDoList.findMany();
  }

  findByMonthYear({ year, month }) {
    return this.prisma.toDoList.findMany({
      where: {
        dueDate: {
          gte: new Date(year, month, 0),
          lte: new Date(year, month + 1, 0),
        },
      },

      select: {
        uid: true,
        dueDate: true,
        _count: { select: { ToDo: true } },
        ToDo: {
          select: {
            uid: true,
            title: true,
            description: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  findOne(uid: string) {
    return this.prisma.toDoList.findUniqueOrThrow({ where: { uid: uid } });
  }

  update(uid: string, updateTodoListDto: UpdateTodoListDto) {
    return this.prisma.toDoList.update({
      where: { uid: uid },
      data: updateTodoListDto,
      select: {
        uid: true,
        dueDate: true,
        _count: { select: { ToDo: true } },
        ToDo: {
          select: {
            uid: true,
            title: true,
            description: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  remove(uid: string) {
    return this.prisma.toDoList.delete({ where: { uid: uid } });
  }
}
