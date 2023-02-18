// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const list = await prisma.toDoList.create({
    data: { dueDate: new Date() },
  });

  const todo1 = await prisma.toDo.create({
    data: {
      title: 'Todo item 1',
      listId: list.uid,
      description: 'ToDo item description ',
    },
  });
  const todo2 = await prisma.toDo.create({
    data: {
      title: 'Todo item 2',
      listId: list.uid,
      description: 'ToDo item description ',
    },
  });

  console.log({ list, todo1, todo2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
