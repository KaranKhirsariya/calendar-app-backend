import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TodoListsModule } from './todo-lists/todo-lists.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [PrismaModule, TodoListsModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
