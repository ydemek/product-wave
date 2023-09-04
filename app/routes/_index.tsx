import { json, type LoaderArgs, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { LoadMoreButton } from "~/components/LoadMoreButton";
import { Product } from "~/components/Product";
import Slider from "~/components/Slider";
import { fetchProducts } from "~/models/ProductModel";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Product Wave" },
    { name: "description", content: "Welcome to Product Wave" },
  ];
};

export async function loader({ }: LoaderArgs) {
  const url = await fetchProducts(
    "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05"
  );

  return json(url);
}

export default function Index() {
  const data = useLoaderData();
  const [products, setProducts] = useState(data.products)
  const [horizontalProducts, sethorizontalProducts] = useState(data.horizontalProducts)
  const [nextUrl, setNextUrl] = useState(data.nextUrl)
  const [loading, setLoading] = useState(false)

  const getMore = async () => {
    setLoading(true);
    let res = await fetchProducts(nextUrl);
    setProducts((prevData: any) => [...prevData, ...(res?.products || [])]);
    setNextUrl(res?.nextUrl || null)
    setLoading(false)
  }


  return (
    <div className="bg-white	 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl fotn-bold text-gray-800 md:mb-6 lg:text-3xl">
            Products
          </h2>
        </div>
        <Slider list={horizontalProducts} />
        <div className="grid gap-4 grid-cols-2 bg-gray-200 p-4">
          {products.map((product: any) => (
            <Product product={product} />
          ))}
        </div>

        

        <LoadMoreButton onClick={getMore} disabled={!nextUrl} loading={loading} />



      </div>
    </div>
  );
}
