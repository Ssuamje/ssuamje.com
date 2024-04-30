import { PrismaClient } from "@/prisma/generated/client";
import Tests from "@/components/tests.server";

const prisma = new PrismaClient();
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tests></Tests>
    </main>
  );
}
