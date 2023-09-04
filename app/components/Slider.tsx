import React from "react";
import { Carousel } from "@material-tailwind/react";

export interface ListItem {
  name: string;
  imageUrl: string;
  code: number;
  price: number;
  followCount: number;
  countOfPrices: number;
  dropRatio: number;
}

interface SliderProps {
  list: ListItem[];
}

function formatAsTLPrice(amount: number): string {
  const formattedPrice = amount.toLocaleString("tr-TR", {
    style: "currency",
    currency: "TRY",
  });
  return formattedPrice.replace("₺", "");
}

const Slider: React.FC<SliderProps> = ({ list }) => {
  return (
    <Carousel className='rounded-xl  product-slider'>
      {list.map((item, index) => (
        <div className='product-slider-item flex pt-5 relative'>
        <img
          className='product-slider-item-image max-w-xs mr-28'
          key={index}
          src={item?.imageUrl}
          alt={`Slide ${index}`}
        />
        <div className='product-slider-item-discount absolute top-0 left-36'>
          <p className='flex items-center justify-center bg-red-600 text-white font-bold rounded-full text-sm py-2 px-3'>
            %{item.dropRatio}
          </p>
        </div>
        <div>
          <h2 className='text-blue-500'>{item.name}</h2>
          <p className='text-xl font-bold'>
            {formatAsTLPrice(item.price).split(",")[0]}
            <span className='text-sm font-normal'>,{formatAsTLPrice(item.price).split(",")[1]} TL</span>
          </p>
          <div className='text-xs flex items-center'>
            <p>{item.countOfPrices} satıcı</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.3}
              stroke='currentColor'
              className='w-5 h-5 ml-1'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </div>
          <p className='mt-3 text-sm'>{item.followCount.toLocaleString("tr-TR")}+ takip</p>
        </div>
      </div>
      
      ))}
    </Carousel>
  );
};

export default Slider;
