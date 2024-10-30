import React, { useEffect, useState } from "react";
import { IProduct } from "../types/Product";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getProducts } from "../api/products";
import { setProducts } from "../store/features/ProductSlice";
import { getComments } from "../api/comments";
import { setComments } from "../store/features/CommentSlice";
import ProductCard from "./ProductCard";

const ListProduct = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const comments = useAppSelector((state) => state.comments.comments);

  const [sortCriterion, setSortCriterion] = useState("name");

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProducts();
      const commentData = await getComments();
      dispatch(setProducts(productData));
      dispatch(setComments(commentData));
    };

    fetchData();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortCriterion === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortCriterion === "count") {
      return b.count - a.count;
    }
    return 0;
  });

  return (
    <div className="space-y-4">
      <select
        value={sortCriterion}
        onChange={(e) => setSortCriterion(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="name">Сортувати за назвою</option>
        <option value="count">Сортувати за кількістю</option>
      </select>

      {sortedProducts.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} comments={comments} />
      ))}
    </div>
  );
};

export default ListProduct;
