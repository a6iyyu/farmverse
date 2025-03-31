import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.users.deleteMany();
  await prisma.users.createMany({
    data: [
      {
        id_user: "550e8400-e29b-41d4-a716-446655440000",
        username: "admin",
        name: "Admin",
        email: "farmverse@gmail.com",
        password: "123456",
        role: "ADMIN",
      },
      {
        id_user: "550e8400-e29b-41d4-a716-446655440001",
        username: "a6iyyu",
        name: "Rafi Abiyyu Airlangga",
        email: "mizukinako7@gmail.com",
        password: "123456",
        role: "FARMER",
      }
    ],
  });
}

seed()
  .catch((e) => {
    console.error("An error occurred while running the seeder:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });