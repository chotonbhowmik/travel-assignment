import  { useState } from "react";

const SelectTripType = () => {
  const [selectedOption, setSelectedOption] = useState("Round Trip");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="m-10 flex justify-center text-black">
      <div className="flex justify-between border border-slate-900 rounded cursor-pointer">
        <div
          className={`w-35 p-1.5 px-5 ${
            selectedOption === "Round Trip" ? "bg-blue-950 text-white" : "null"
          }`}
          onClick={() => handleOptionClick("Round Trip")}
        >
          <p className="font-semibold">Round Trip</p>
        </div>
        <div
          className={`w-35 p-1.5 px-5 ${
            selectedOption === "One Way" ? "bg-blue-950 text-white" : "null"
          }`}
          onClick={() => handleOptionClick("One Way")}
        >
          <p className="font-semibold">One Way</p>
        </div>
        <div
          className={`w-35 p-1.5 px-5 ${
            selectedOption === "Multi City" ? "bg-blue-950 text-white" : "null"
          }`}
          onClick={() => handleOptionClick("Multi City")}
        >
          <p className="font-semibold">Multi City</p>
        </div>
      </div>
    </div>
  );
};

export default SelectTripType;
