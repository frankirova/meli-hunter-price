import "./App.css";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { Finder } from "./Finder";
import { ModalHunt } from "./ModalHunt";

function App() {
  const { data, handleChangeData } = useFetch("https://meli-hunter-price-server.onrender.com/products");

  const [selectedProduct, setSelectedProduct] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchProducts = async () => {
    try {
      const response = await fetch(
        `https://meli-hunter-price-server.onrender.com/findProducts?q=${searchQuery}`
      );
      const datito = await response.json();
      handleChangeData(datito);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePriceChange = (event) => {
    setTargetPrice({ target: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery("");
    setTargetPrice("");
  };

  const handleProductSelect = (productId) => {
    setSelectedProduct(productId);
  };

  const openModal = (event) => {
    setIsOpen(true);
    handleProductSelect({ id: event });
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  console.log(selectedProduct);
  console.log(targetPrice);

  if (!data) return <p>loading...</p>;

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 rounded-md px-4 py-2"
          />
          <button
            onClick={searchProducts}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Find
          </button>
        </form>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map((product) => (
          <div
            key={product.title}
            className="bg-white p-4 shadow-md rounded-md space-y-2"
          >
            <img src={product.img} />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500">{product.id}</p>
            <p className="text-gray-500">${product.price}</p>
            <button
              onClick={() => openModal(product.id)}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Hunt
            </button>
          </div>
        ))}
      </div>
      <ModalHunt
        isOpen={isOpen}
        onClose={closeModal}
        handlePriceChange={handlePriceChange}
      />
    </>
  );
}
export default App;
