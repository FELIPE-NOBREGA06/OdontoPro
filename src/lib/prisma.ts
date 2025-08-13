import { Prisma, PrismaClient } from "@prisma/client"

let prisma: PrismaClient

if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient();
}else{
    let gloolWithPrisma = global as typeof globalThis & {
        prisma: PrismaClient;
    }

    if(!gloolWithPrisma.prisma){
        gloolWithPrisma.prisma = new PrismaClient();
    }

    prisma = gloolWithPrisma.prisma;
}

export default prisma;