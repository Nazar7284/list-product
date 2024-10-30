import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get(
      "http://localhost:3001/products?_sort=name,count"
    );
    return res.data;
  } catch (error) {
    console.error("Error while get products", error);
  }
};
