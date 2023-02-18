import { Module } from '@nestjs/common';
import { TodoListsService } from './todo-lists.service';
import { TodoListsController } from './todo-lists.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TodoListsController],
  providers: [TodoListsService],
  imports: [PrismaModule],
})
export class TodoListsModule {}
