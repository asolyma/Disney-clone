// import { PrismaClien} from "@prisma/client";

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   let globalWithPrisma = global as typeof globalThis & {
//     prisma: PrismaClient;
//   };

//   prisma = globalWithPrisma.prisma;
// }

// export default prisma;

import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: PrismaClient | undefined;
}
export const primsa = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = primsa;
