-- CreateTable
CREATE TABLE `project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `alt` VARCHAR(191) NOT NULL,
    `ishosted` BOOLEAN NOT NULL,
    `hostedLink` VARCHAR(191) NOT NULL,
    `githubLink` VARCHAR(191) NOT NULL,
    `isMore` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImageArray` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `framework` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projectDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `videoLink` VARCHAR(191) NOT NULL,
    `longdesc` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ImageArrayToprojectDetails` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ImageArrayToprojectDetails_AB_unique`(`A`, `B`),
    INDEX `_ImageArrayToprojectDetails_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_frameworkToprojectDetails` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_frameworkToprojectDetails_AB_unique`(`A`, `B`),
    INDEX `_frameworkToprojectDetails_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `projectDetails` ADD CONSTRAINT `projectDetails_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ImageArrayToprojectDetails` ADD CONSTRAINT `_ImageArrayToprojectDetails_A_fkey` FOREIGN KEY (`A`) REFERENCES `ImageArray`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ImageArrayToprojectDetails` ADD CONSTRAINT `_ImageArrayToprojectDetails_B_fkey` FOREIGN KEY (`B`) REFERENCES `projectDetails`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_frameworkToprojectDetails` ADD CONSTRAINT `_frameworkToprojectDetails_A_fkey` FOREIGN KEY (`A`) REFERENCES `framework`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_frameworkToprojectDetails` ADD CONSTRAINT `_frameworkToprojectDetails_B_fkey` FOREIGN KEY (`B`) REFERENCES `projectDetails`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
