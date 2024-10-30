import React from "react";
import { IProduct } from "../types/Product";
import DeleteProductModal from "./DeleteProductModal";
import EditProductModal from "./EditProductModal";
import { IComment } from "../types/Comment";
import useModal from "../hooks/useModal";
import ProductContent from "./ProductContent";

interface ProductCardProps {
  product: IProduct;
  comments: IComment[];
}

const ProductCard: React.FC<ProductCardProps> = ({ product, comments }) => {
  const modalProps = useModal();
  const [productIdToDelete, setProductIdToDelete] = React.useState<
    number | null
  >(null);
  const [productToEdit, setProductToEdit] = React.useState<IProduct | null>(
    null
  );

  const openDeleteModal = (id: number) => {
    setProductIdToDelete(id);
    modalProps.onOpen();
  };

  const openEditModal = (product: IProduct) => {
    setProductToEdit(product);
    modalProps.onOpen();
  };

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
      <ProductContent product={product} comments={comments} />{" "}
      <button
        onClick={() => openEditModal(product)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Редагувати
      </button>
      <button
        onClick={() => openDeleteModal(product.id)}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Видалити продукт
      </button>
      {productIdToDelete !== null && (
        <DeleteProductModal {...modalProps} productId={productIdToDelete} />
      )}
      {productToEdit !== null && (
        <EditProductModal {...modalProps} product={productToEdit} />
      )}
    </div>
  );
};

export default ProductCard;
