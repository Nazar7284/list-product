import ListProduct from "./components/ListProduct";
import useModal from "./hooks/useModal";
import AddProductModal from "./components/AddProductModal";

function App() {
  const modalProps = useModal();

  return (
    <div className="p-8 w-full overflow-hidden">
      <AddProductModal {...modalProps} />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Product List</h1>
        <button
          onClick={modalProps.onOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Додати продукт
        </button>
      </div>
      <ListProduct />
    </div>
  );
}

export default App;
