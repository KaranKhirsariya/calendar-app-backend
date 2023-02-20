-- CreateTable
CREATE TABLE `ToDoList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dueDate` DATETIME(3) NOT NULL,
    `uid` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ToDoList_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ToDo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `listId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `uid` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ToDo_uid_key`(`uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ToDo` ADD CONSTRAINT `ToDo_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `ToDoList`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;
