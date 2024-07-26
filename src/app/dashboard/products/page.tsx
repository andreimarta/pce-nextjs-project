import { PrismaClient } from "@prisma/client";
import Card from "@/app/components/Card";

export interface ProductCardType {
  id: number;
  name: string;
  price: number;
  description: string;
  category_id: number;
}
const prisma = new PrismaClient();

const fetchData = async () => {
  let categories = await prisma.category.findMany();
  let products = await prisma.product.findMany();
  let attributes = await prisma.attribute.findMany();
  let attributeValues = await prisma.attributeValue.findMany();

  return [categories, products, attributes, attributeValues];
};

// const fetchCategories = async () => {
//   let categories = await prisma.category.findMany();
//   return cateogries;
// };

// const fetchProducts = async (): Promise<ProductCardType[]> => {
//   let products = await prisma.product.findMany();
//   return products;
// };

// const fetchAttributes = async () => {
//   let attributes = await prisma.attribute.findMany();
//   return attributes;
// };

// const fetchProductAttributes = async () => {
//   let productAttributes = await prisma.productAttribute.findMany();
//   return productAttributes;
// };

export default async function Home() {
  const [categories, products, attributes, attributeValues] = await fetchData();
  // const categories = await fetchCategories();
  // const products = await fetchProducts();
  // const attributes = await fetchAttributes();
  // const productAttributes = await fetchProductAttributes();
  console.log(categories, products, attributes, attributeValues);

  return (
    <main>
      <h1 className="text-2xl font-bold underline">
        Hello, this is products page!
      </h1>

      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </main>
  );
}
