
export interface Product {
  badge: string;
  countOfPrices: number;
  freeShipping: boolean;
  imageUrl: string;
  lastUpdate: string;
  mkName: string;
  price: number;
  productName: string;
  rating: number;
  storageOptions: string[];
}

async function fetchProductDetail(detailCode: number): Promise<Product | null> {
  try {
    // Make a GET request to the mock API endpoint
    const response = await fetch(
      `https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=${detailCode}`
    );

    // Check if the response status is OK (200)
    if (response.ok) {
      // Parse the JSON response
      const data = await response.json();

      return data.result;
    } else {
      console.error("Failed to fetch product data:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

export { fetchProductDetail };
