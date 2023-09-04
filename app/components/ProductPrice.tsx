import formatPrice from "~/utils/formatPrice";


export const ProductPrice = (props: { price: any; }) => {
  const { price } = props;
  return (
    <p className='price'>
      {formatPrice(price).split(",")[0]}
      <span>,{formatPrice(price).split(",")[1]} TL</span>
    </p>
  );
};
