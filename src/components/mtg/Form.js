import React from "react";
import { MaterialSymbol } from "react-material-symbols";

const MtgForm = ({
  inputValues,
  handleInputChange,
  handleFileChange,
  setInputValues,
}) => {
  function setRandomIdentifier() {
    // Generate a random 9-digit number
    const randomNumber = Math.floor(Math.random() * 90000000) + 10000000;

    const updateInputValue = (key, value) => {
      setInputValues((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    };

    updateInputValue("mtgIdentifier", randomNumber);
  }

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="w-full mb-4">
        <label
          htmlFor="mtgTemplate"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Template:
        </label>
        <select
          onChange={handleInputChange}
          name="mtgTemplate"
          className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.mtgTemplate}
        >
          <option value="normal">Normal</option>
          <option value="effect">Effect</option>
          <option value="trap">Trap</option>
          <option value="spell">Spell</option>
          <option value="fusion">Fusion</option>
          <option value="ritual">Ritual</option>
          <option value="token">Token</option>
          <option value="synchro">Synchro</option>
          <option value="dark-synchro">Dark Syncrho</option>
        </select>
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="name"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.name}
          onChange={handleInputChange}
        />
      </div>

      {inputValues.mtgTemplate !== "spell" &&
        inputValues.mtgTemplate !== "trap" && (
          <div className="w-full mb-4">
            <label
              htmlFor="mtgElement"
              className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
            >
              Element:
            </label>
            <select
              onChange={handleInputChange}
              name="mtgElement"
              className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={inputValues.mtgElement}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="fire">Fire</option>
              <option value="earth">Earth</option>
              <option value="water">Water</option>
              <option value="wind">Wind</option>
              <option value="laugh">Laugh</option>
              <option value="divine">Divine</option>
            </select>
          </div>
        )}

      {inputValues.mtgTemplate !== "spell" &&
        inputValues.mtgTemplate !== "trap" && (
          <div className="w-full mb-4">
            <label
              htmlFor="mtgLevel"
              className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
            >
              Level:
            </label>
            <input
              type="range"
              name="mtgLevel"
              min="0"
              max="12"
              className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChange}
              value={inputValues.mtgLevel}
            />
            <div className="flex justify-between mt-2 text-xs text-gray-600 select-none">
              {Array.from({ length: 13 }, (_, index) => (
                <span key={index} className="w-8 text-center">
                  {index}
                </span>
              ))}
            </div>
          </div>
        )}

      <div className="w-full mb-4">
        <label
          htmlFor="image"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Artwork:
        </label>
        <input
          onChange={handleFileChange}
          type="file"
          accept="image/*"
          className="block w-full cursor-pointer border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:cursor-pointer file:me-4 file:p-2.5 dark:file:bg-neutral-700 dark:file:text-neutral-400"
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgEdition"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Edition:
        </label>
        <input
          type="text"
          name="mtgEdition"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.mtgEdition}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgCardNumber"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Card/Set Number:
        </label>
        <input
          type="text"
          name="mtgCardNumber"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.mtgCardNumber}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgCardType"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Type:
        </label>
        <input
          type="text"
          name="mtgCardType"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.mtgCardType}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgEffect"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Effect:
        </label>
        <input
          type="text"
          name="mtgEffect"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.mtgEffect}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgAttack"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Attack:
        </label>
        <input
          type="range"
          name="mtgAttack"
          min="0"
          max="9900"
          step="100"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.mtgAttack}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgDefense"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Defense:
        </label>
        <input
          type="range"
          name="mtgDefense"
          min="0"
          max="9900"
          step="100"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.mtgDefense}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgIdentifier"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Identifier:
        </label>
        <div className="w-full relative">
          <input
            type="text"
            name="mtgIdentifier"
            className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={inputValues.mtgIdentifier}
            onChange={handleInputChange}
          />
          <div
            onClick={() => setRandomIdentifier()}
            className="group absolute right-[5px] top-[5px] cursor-pointer select-none flex items-center justify-center text-neutral-900 bg-white border border-neutral-300 focus:outline-none hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 font-medium rounded-lg text-sm w-8 h-8  dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700 shadow-xl hover:shadow-2xl"
          >
            <MaterialSymbol
              icon="casino"
              size={20}
              fill
              className="rotate-[15deg] group-hover:rotate-[-5deg] transition-all relative"
            />
          </div>
        </div>
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgCopyright"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Copyright:
        </label>
        <input
          type="text"
          name="mtgCopyright"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.mtgCopyright}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default MtgForm;
