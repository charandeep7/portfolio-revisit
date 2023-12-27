import prisma from "./prismaClient";

export const addProject = async (data: any) => {
    try {
        const res = await prisma.project.create({
            data
        })
        return res;
    } catch (error: any) {
        console.log(error)
    } finally {
        prisma.$disconnect();
    }
}

export const addProjectWithPreview = async (data: any) => {
    try {
        const res = await prisma.project.create({
            data,
            include: {
                projectDetails: {
                    include: {
                        images: true,
                        frameworks: true
                    }
                }
            }
        })
        return res;
    } catch (error: any) {
        console.log(error.message)
    } finally {
        prisma.$disconnect();
    }
}