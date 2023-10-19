import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const Finder = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { data } = useFetch(
      `https://meli-hunter-price-server.onrender.com/findProduct?q=${searchQuery}`
    );
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery("");
    setTargetPrice("");
  };
  console.log(data)

  const searchProducts = async () => {
    try {
      const response = await fetch(
        `https://meli-hunter-price-server.onrender.com/findProducts?q=${searchQuery}`
      );
      const datito = await response.json();
      console.log(datito);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
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
  );
};
