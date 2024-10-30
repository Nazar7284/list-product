import { FC, useState } from "react";
import { ModalProps } from "../hooks/useModal";
import Modal from "./ui/Modal";
import { addProduct } from "../store/features/ProductSlice";
import { useAppDispatch } from "../hooks/redux";
import { IProduct } from "../types/Product";

interface AddProductModalProps extends ModalProps {}

const AddProductModal: FC<AddProductModalProps> = (props) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: "",
    count: 0,
    weight: "",
    imageUrl: "",
    size: { width: 0, height: 0 },
  });
  const [error, setError] = useState("");

  const validateFields = () => {
    const { name, count, weight, imageUrl, size } = formData;
    if (
      !name ||
      count <= 0 ||
      !weight ||
      !imageUrl ||
      size.width <= 0 ||
      size.height <= 0
    ) {
      setError("Будь ласка, заповніть усі поля правильно.");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "count" || name === "width" || name === "height"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateFields()) {
      const newProduct: IProduct = {
        id: Date.now(),
        name: formData.name,
        count: formData.count,
        weight: formData.weight,
        imageUrl: formData.imageUrl,
        size: formData.size,
        comments: [],
      };

      dispatch(addProduct(newProduct));
      props.onClose();
      setFormData({
        name: "",
        count: 0,
        weight: "",
        imageUrl: "",
        size: { width: 0, height: 0 },
      });
    }
  };

  const handleCancel = () => {
    props.onClose();
    setFormData({
      name: "",
      count: 0,
      weight: "",
      imageUrl: "",
      size: { width: 0, height: 0 },
    });
  };

  return (
    <Modal {...props}>
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        {error && <p className="text-red-500">{error}</p>}

        <div>
          <label className="block mb-1" htmlFor="productName">
            Назва продукту
          </label>
          <input
            id="productName"
            type="text"
            placeholder="Назва продукту"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1" htmlFor="productCount">
            Кількість
          </label>
          <input
            id="productCount"
            type="number"
            placeholder="Кількість"
            value={formData.count}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1" htmlFor="productWeight">
            Вага (грам)
          </label>
          <input
            id="productWeight"
            type="text"
            placeholder="Вага (грам)"
            value={formData.weight}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1" htmlFor="productImageUrl">
            URL зображення
          </label>
          <input
            id="productImageUrl"
            type="text"
            placeholder="URL зображення"
            value={formData.imageUrl}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-1" htmlFor="productWidth">
              Ширина (px)
            </label>
            <input
              id="productWidth"
              type="number"
              placeholder="Ширина (px)"
              value={formData.size.width}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1" htmlFor="productHeight">
              Висота (px)
            </label>
            <input
              id="productHeight"
              type="number"
              placeholder="Висота (px)"
              value={formData.size.height}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Скасувати
          </button>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Додати продукт
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProductModal;
