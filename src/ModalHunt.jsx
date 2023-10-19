import React from "react";
export const ModalHunt = ({ isOpen, onClose, handlePriceChange }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-slate-100 px-24 py-12 rounded shadow-lg min-w-max">
            <h2 className="text-lg font-bold mb-4">Hunting product</h2>
            <form className="flex flex-col space-y-4">
              <label>Target</label>
              <input
                onChange={handlePriceChange}
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 rounded-md px-4 py-2"
                type="text"
                name="target"
              />
              <label>Card</label>
              <input
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 rounded-md px-4 py-2"
                type="text"
                name="card"
              />
            </form>
            <div className="mt-4 gap-2 flex justify-end">
              <button
                className="border border-yellow-500 text-yellow-500 rounded-md px-4 py-2 transition duration-400 ease-in-out hover:border-yellow-700 hover:text-yellow-700"
                onClick={onClose}
              >
                Cerrar
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                onClick={onClose}
              >
                Active
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
