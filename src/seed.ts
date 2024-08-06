const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const electronicsCategory = await prisma.category.create({
    data: {
      name: "Electronics",
      products: {
        create: [
          {
            name: "Smartphone",
            price: 999.99,
            description: "A high-end device, packed with great features!",
            attributes: {
              create: [
                {
                  name: "Color",
                  values: {
                    create: [{ value: "Gold" }, { value: "Blue" }],
                  },
                },
                {
                  name: "Storage",
                  values: {
                    create: [{ value: "128 GB" }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  const clothingCategory = await prisma.category.create({
    data: {
      name: "Clothing",
      products: {
        create: [
          {
            name: "T-shirt",
            price: 19.99,
            description: "Normal fit t-shirt, for everyday comfort!",
            attributes: {
              create: [
                {
                  name: "Material",
                  values: {
                    create: [{ value: "Cotton" }],
                  },
                },
                {
                  name: "Size",
                  values: {
                    create: [{ value: "L" }, { value: "XXL" }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
