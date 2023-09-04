export interface Product {
  name: string;
  imageUrl: string;
  code: number;
  price: number;
  followCount: number;
  countOfPrices: number;
  dropRatio: number;
}


interface List {
    horizontalProducts: Product[],
    products: Product[],
    nextUrl: string
}


async function fetchProducts(url: string): Promise<List | null> {
    try {
      const response = await fetch(url);
  
      if (response.ok) {
        const data = await response.json();
        return data.result;
      } else {
        console.error("Failed to fetch products:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      return null;
    }
  }
  
  export { fetchProducts };