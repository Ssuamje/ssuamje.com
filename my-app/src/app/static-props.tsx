import { PrismaClient } from "@/prisma/generated/client";

export async function getStaticProps() {
    const prisma = new PrismaClient();
    const tests = await prisma.test.findMany(); 
  return {
    props: {
      tests
    },
  };
}