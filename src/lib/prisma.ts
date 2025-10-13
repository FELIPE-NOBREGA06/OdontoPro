<<<<<<< HEAD
import { Prisma, PrismaClient } from "../generated/prisma/client"

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
=======

import { PrismaClient } from '../generated/prisma';


let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Evitar múltiplas instâncias no hot reload
  let globalWithPrisma = global as typeof globalThis & { prisma?: PrismaClient };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

export default prisma;
  
>>>>>>> 6328a0a (att)
