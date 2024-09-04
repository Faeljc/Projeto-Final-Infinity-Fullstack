/*
  Warnings:

  - You are about to drop the column `categoryId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `posts_categoryId_fkey`;

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `categoryId`;

-- DropTable
DROP TABLE `items`;
