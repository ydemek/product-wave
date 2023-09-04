import { fetchProductDetail } from "~/models/ProductDetailModel";


async function getProductDetailViewModel(detailCode: number) {
    const productDetail = await fetchProductDetail(detailCode);
    return {productDetail};
}

export {getProductDetailViewModel}