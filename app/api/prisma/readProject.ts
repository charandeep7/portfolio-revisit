import prisma from "./prismaClient";

export const readProject = async () => {
    try{
        const out = await prisma.project.findMany({})
        return out
    }catch(error){
        console.log(error)
    }finally{
        prisma.$disconnect()
    }
}

export const readSingleProject = async (id: number) => {
    try{
        const out = await prisma.project.findUnique({
            where: {
                id
            },
            include: {
                projectDetails: {
                    include: {
                        images: true,
                        frameworks: true
                    }
                }
            }
        })
        return out
    }catch(error){
        console.log(error)
    }finally{
        prisma.$disconnect()
    }
}