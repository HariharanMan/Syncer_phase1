let cachedProducts = null;

export const getProducts = () => {
  if (!cachedProducts) {
    cachedProducts = Array.from({ length: 10000 }, (_, i) => ({
      name: `Product ${i + 1}`,
      category: i % 2 === 0 ? 'tech' : 'fashion'
    }));
  }
  return cachedProducts;
};
