/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `ToDo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `ToDoList` will be added. If there are existing duplicate values, this will fail.
  - The required column `uid` was added to the `ToDo` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uid` was added to the `ToDoList` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `ToDo` DROP FOREIGN KEY `ToDo_listId_fkey`;

-- AlterTable
ALTER TABLE `ToDo` ADD COLUMN `uid` VARCHAR(191) NOT NULL,
    MODIFY `listId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ToDoList` ADD COLUMN `uid` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ToDo_uid_key` ON `ToDo`(`uid`);

-- CreateIndex
CREATE UNIQUE INDEX `ToDoList_uid_key` ON `ToDoList`(`uid`);

-- AddForeignKey
ALTER TABLE `ToDo` ADD CONSTRAINT `ToDo_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `ToDoList`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;
