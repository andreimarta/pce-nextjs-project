import Link from "next/link";
import { ProductCardType } from "../dashboard/products/page";

interface Props {
  product: ProductCardType;
}

export default async function Card({ product }: Props) {
  return (
    <div className="w-64 h-32 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="#" />
      <div className="p-1">
        <h3 className="font-bold text-2xl mb-2">{product.name}</h3>
        <div className="flex font-light capitalize">
          <p className="mr-3">{product.name}</p>
        </div>
        <p className="flex mt-1 font-bold justify-center">{product.price}</p>
      </div>
    </div>
  );
}
