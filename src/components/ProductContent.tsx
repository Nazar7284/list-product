import React from "react";
import { IProduct } from "../types/Product";
import { IComment } from "../types/Comment";

interface ProductContentProps {
  product: IProduct;
  comments: IComment[];
}

const ProductContent: React.FC<ProductContentProps> = ({
  product,
  comments,
}) => {
  return (
    <>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-32 object-contain rounded mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">Count: {product.count}</p>
      <p className="text-gray-600">Weight: {product.weight}</p>
      <div className="text-gray-600 mt-2">
        Size: {product.size.width}x{product.size.height} px
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium">Comments:</h3>
        {comments
          .filter((comment) => comment.productId === product.id)
          .map((comment) => (
            <div key={comment.id} className="text-gray-500 text-sm">
              <p>"{comment.description}"</p>
              <span className="text-xs text-gray-400">{comment.date}</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductContent;
