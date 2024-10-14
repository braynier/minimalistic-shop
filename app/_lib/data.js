// get products

export const getProducts = async function () {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const filteredData = data.filter(
      (product) => product.category !== "electronics" && "jewelery",
    );
    return filteredData;
  } catch (error) {
    console.log("error fetching products:", error);
    return [];
  }
};
