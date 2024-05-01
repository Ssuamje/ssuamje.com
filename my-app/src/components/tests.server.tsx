import { PrismaClient } from "@/prisma/generated/client";

const prisma = new PrismaClient();

export default async function Tests() {
  const tests = await prisma.test.findMany();

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {tests.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
