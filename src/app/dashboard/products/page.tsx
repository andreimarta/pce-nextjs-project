import { PrismaClient } from "@prisma/client";
import Card from "@/app/components/Card";
import SearchInput from "@/app/components/SearchInput";

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

export default async function Home() {
  const [categories, products, attributes, attributeValues] = await fetchData();
  console.log(categories, products, attributes, attributeValues);

  return (
    <main>
      <h1 className="text-2xl font-bold underline">
        Hello, this is products page!
      </h1>

      <div className="flex flex-col gap-10 items-center p-6">
        <SearchInput />
      </div>

      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </main>
  );
}
