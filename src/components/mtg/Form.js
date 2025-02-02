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
          <option value="none">None</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
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

      <div className="w-full mb-4">
        <label
          htmlFor="mtgManaCost"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Mana Cost:
        </label>
        <input
          type="text"
          name="mtgManaCost"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.mtgManaCost}
          onChange={handleInputChange}
        />
      </div>

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
          htmlFor="mtgRulesText"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Rules Text:
        </label>
        <input
          type="text"
          name="mtgRulesText"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.mtgRulesText}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgFlavorText"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Flavor Text:
        </label>
        <input
          onChange={handleInputChange}
          value={inputValues.mtgFlavorText}
          type="text"
          name="mtgFlavorText"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgArtist"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Artist:
        </label>
        <input
          type="text"
          name="mtgArtist"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.mtgArtist}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgCardNumber"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Card Number:
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

      <div className="w-full mb-4">
        <label
          htmlFor="mtgPower"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Power:
        </label>
        <input
          type="range"
          name="mtgPower"
          min="0"
          max="9900"
          step="100"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.mtgPower}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="mtgToughness"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Toughness:
        </label>
        <input
          type="range"
          name="mtgToughness"
          min="0"
          max="9900"
          step="100"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.mtgToughness}
        />
      </div>
    </div>
  );
};

export default MtgForm;
