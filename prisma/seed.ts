import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";

const prisma = new PrismaClient();

async function seed() {
  await prisma.sessions.deleteMany();
  await prisma.users.deleteMany();
  await prisma.users.createMany({
    data: [
      {
        id_user: "550e8400-e29b-41d4-a716-446655440000",
        username: "admin",
        name: "Admin",
        email: "farmverse@gmail.com",
        password: hashSync("123456", 10),
        role: "ADMIN",
      },
      {
        id_user: "550e8400-e29b-41d4-a716-446655440001",
        username: "petanimakmurjaya",
        name: "CV Petani Makmur Jaya",
        email: "petanimakmurjaya@gmail.com",
        password: hashSync("123456", 10),
        role: "BANK",
      },
      {
        id_user: "550e8400-e29b-41d4-a716-446655440002",
        username: "mizurakyatfarmverse",
        name: "Mizu Kinako",
        email: "mizukinako7@gmail.com",
        password: hashSync("123456", 10),
        role: "CUSTOMER",
      },
      {
        id_user: "550e8400-e29b-41d4-a716-446655440003",
        username: "a6iyyu",
        name: "Rafi Abiyyu Airlangga",
        email: "ffst4irs@gmail.com",
        password: hashSync("123456", 10),
        role: "FARMER",
      },
    ],
  });
}

// prettier-ignore
seed().catch(e => (console.error(`\nError seeding the database: ${e}\n`), process.exit(1))).finally(async () => await prisma.$disconnect());