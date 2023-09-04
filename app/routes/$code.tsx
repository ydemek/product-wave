import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useFetcher, useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ProductPrice } from "~/components/ProductPrice";
import { RateStar } from "~/components/RateStar";
import { getProductDetailViewModel } from "~/viewmodels/ProductDetailViewModel";

export let loader: LoaderFunction = async ({ params }) => {
  const { detailCode } = params;
  const { productDetail } = await getProductDetailViewModel(Number(detailCode));

  return json({ productDetail });
};

export default function Detail() {
  const data = useLoaderData();

  const {  productDetail } = data;
  return (
    <div>
      {productDetail ? (
        <div className='product'>
          <div className='product-header'>
            <div >
              <p className='product-header-brand'>{productDetail.mkName}</p>
              <p className='product-header-name'>{productDetail.productName}</p>
              <p className='product-header-badge'>{productDetail.badge}</p>
            </div>
            <div className="product-header-stars">
              <RateStar fill="yellow" />
              <RateStar fill="yellow" />
              <RateStar fill="yellow" />
              <RateStar fill="yellow" />
              <RateStar fill="none" />
            </div>
          </div>
          <div className='product-body'>
            <img
              src={productDetail.imageUrl}
              alt={productDetail.productName}
              className='product-body-image'
            />
          </div>
          <div className='product-footer'>
            <div className='product-footer-capacities'>
              <h2 className='product-footer-capacities-text'>
                Kapasite Secenekleri:
              </h2>
              <div className='product-footer-capacities-container'>
                {productDetail.storageOptions.map((option: string, index: number) => (
                  <p
                    className='product-footer-capacities-container-item'
                    key={index}
                  >
                    {option}
                  </p>
                ))}
              </div>
            </div>
            <div className='product-footer-prices'>
              <p className='product-footer-prices-counts'>
                {productDetail.countOfPrices} satici icinde kargo dahil en ucuz fiyat
                secenegi
              </p>
              <ProductPrice price={productDetail.price} />
              <p className='product-footer-prices-shipping'>Ucretsiz Kargo</p>
              <p className='product-footer-prices-update'>
                Son Guncelleme: {productDetail.lastUpdate}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Product detail not found.</p>
      )}
    </div>
  );
}
