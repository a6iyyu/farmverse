/*
  Warnings:

  - You are about to alter the column `role` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('ADMIN', 'BANK', 'CUSTOMER', 'FARMER', 'UNKNOWN') NOT NULL DEFAULT 'UNKNOWN';
