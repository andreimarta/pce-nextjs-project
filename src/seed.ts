const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // // Populate Categories
  // const electronics = await prisma.category.create({
  //   data: {
  //     name: "Electronics",
  //   },
  // });
  // const clothing = await prisma.category.create({
  //   data: {
  //     name: "Clothing",
  //   },
  // });
  // // Populate Products
  // const phone = await prisma.product.create({
  //   data: {
  //     name: "Smartphone",
  //     price: 999.99,
  //     description: "High-end smartphone packed with nice features.",
  //     category: {
  //       connect: { id: electronics.id },
  //     },
  //   },
  // });
  // const tshirt = await prisma.product.create({
  //   data: {
  //     name: "T-Shirt",
  //     price: 19.99,
  //     description: "A comfortable baggy t-shirt.",
  //     category: {
  //       connect: { id: clothing.id },
  //     },
  //   },
  // });
  // // Populate Attributes
  // const color = await prisma.attribute.create({
  //   data: {
  //     name: "Color",
  //   },
  // });
  // const size = await prisma.attribute.create({
  //   data: {
  //     name: "Size",
  //   },
  // });

  // // Populate ProductAttributes for phone
  // await prisma.productAttribute.create({
  //   data: {
  //     product: {
  //       connect: { id: phone.id },
  //     },
  //     attribute: {
  //       connect: { id: color.id },
  //     },
  //     value: "Blue",
  //   },
  // });

  // await prisma.productAttribute.create({
  //   data: {
  //     product: {
  //       connect: { id: phone.id },
  //     },
  //     attribute: {
  //       connect: { id: size.id },
  //     },
  //     value: "6.5 inch",
  //   },
  // });

  // // Populate ProductAttributes for tshirt
  // await prisma.productAttribute.create({
  //   data: {
  //     product: {
  //       connect: { id: tshirt.id },
  //     },
  //     attribute: {
  //       connect: { id: color.id },
  //     },
  //     value: "Green",
  //   },
  // });

  // await prisma.productAttribute.create({
  //   data: {
  //     product: {
  //       connect: { id: tshirt.id },
  //     },
  //     attribute: {
  //       connect: { id: size.id },
  //     },
  //     value: "L",
  //   },
  // });
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

  console.log({ electronicsCategory, clothingCategory });
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
