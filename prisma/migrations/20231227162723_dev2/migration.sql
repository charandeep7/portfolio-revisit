/*
  Warnings:

  - You are about to drop the `_frameworktoprojectdetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_imagearraytoprojectdetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `framework` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `imagearray` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projectdetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_frameworktoprojectdetails` DROP FOREIGN KEY `_frameworkToprojectDetails_A_fkey`;

-- DropForeignKey
ALTER TABLE `_frameworktoprojectdetails` DROP FOREIGN KEY `_frameworkToprojectDetails_B_fkey`;

-- DropForeignKey
ALTER TABLE `_imagearraytoprojectdetails` DROP FOREIGN KEY `_ImageArrayToprojectDetails_A_fkey`;

-- DropForeignKey
ALTER TABLE `_imagearraytoprojectdetails` DROP FOREIGN KEY `_ImageArrayToprojectDetails_B_fkey`;

-- DropForeignKey
ALTER TABLE `projectdetails` DROP FOREIGN KEY `projectDetails_projectId_fkey`;

-- DropTable
DROP TABLE `_frameworktoprojectdetails`;

-- DropTable
DROP TABLE `_imagearraytoprojectdetails`;

-- DropTable
DROP TABLE `framework`;

-- DropTable
DROP TABLE `imagearray`;

-- DropTable
DROP TABLE `project`;

-- DropTable
DROP TABLE `projectdetails`;
