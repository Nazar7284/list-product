import { FC } from "react";
import { ModalProps } from "../hooks/useModal";
import Modal from "./ui/Modal";
import { removeProduct } from "../store/features/ProductSlice";
import { useAppDispatch } from "../hooks/redux";

interface DeleteProductModalProps extends ModalProps {
  productId?: number;
}

const DeleteProductModal: FC<DeleteProductModalProps> = ({
  productId,
  ...props
}) => {
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    props.onClose();
  };

  const handleConfirm = () => {
    if (productId) {
      dispatch(removeProduct(productId));
      props.onClose();
    }
  };

  return (
    <Modal {...props}>
      <div className="p-4">
        <h2 className="text-lg font-semibold">Підтвердження видалення</h2>
        <p className="mt-2">
          Ви дійсно хочете видалити продукт з ID: {productId}?
        </p>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleCancel}
            className="mr-2 bg-gray-300 text-black rounded px-4 py-2"
          >
            Скасувати
          </button>
          <button
            onClick={handleConfirm}
            className="bg-red-500 text-white rounded px-4 py-2"
          >
            Підтвердити
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProductModal;
