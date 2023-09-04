import { Link } from "@remix-run/react";
import { ProductPrice } from "./ProductPrice";

export const Product = (props: { product: any }) => {
  const { product } = props;
  return (
    <Link className='product p-2 bg-white rounded-md ' to={`${product.code}`}>
      <div className='flex'>
        <div className='product-discount mr-2'>
          <p className='flex items-center justify-center bg-red-600 text-white font-bold rounded-full text-sm'>
            %{product.dropRatio}
          </p>
        </div>
        <img className='product-image' src={product?.imageUrl} />
      </div>
      <div>
        <h2 className='text-blue-500 mt-2'>{product.name}</h2>
        <ProductPrice price={product.price} />

        <div className='text-xs flex items-center'>
          <p>{product.countOfPrices} satıcı</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.3}
            stroke='currentColor'
            className='w-5 h-5 ml-1'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </div>
        {product.followCount && (
          <p className='mt-3 text-sm'>
            {product.followCount.toLocaleString("tr-TR")}+ takip
          </p>
        )}
      </div>
    </Link>
  );
};
