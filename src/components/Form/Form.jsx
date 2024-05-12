import  { useState, useEffect } from "react";
import FlightTable from "../FlightTable/FlightTable";
import FilterTable from "../FilterTable/FilterTable";
import SelectTripType from "../SelectTripType/SelectTripType";
const Form = () => {
   const [datas, setData] = useState([]);
   const [showTable, setShowTable] = useState(false);
 const [selectedOption, setSelectedOption] = useState("");

 const handleOptionChange = (e) => {
   setSelectedOption(e.target.value);
 };
useEffect(() => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log("Data fetched:", data);
      setData(data.flightOffer); 
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    
    });
}, []);



   const handleSearch = (e) => {
     e.preventDefault();
     setShowTable(true);
   };

  return (
    <form className="lg:px-[10%] px-[5%] ">
      <SelectTripType></SelectTripType>
      <div className="flex gap-2 flex-col">
        <hr className="border-blue-600" />
        <FilterTable></FilterTable>
        <hr className="border-blue-600 mt-2" />
        <div className="flex mt-1 justify-between items-center overflow-x-auto">
          <div className="flex gap-2">
            <input type="checkbox" />
            <div className="text-xl font-semibold">Extra Options</div>
          </div>
          <div className="flex gap-4 text-base font-semibold items-center">
            <p className="">Environment</p>
            <div>
              <input
                type="radio"
                id="option1"
                name="options"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="option1" className="cursor-pointer ">
                Dummy
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="option2"
                name="options"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="option2" className="cursor-pointer ">
                PDT
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="p-2 px-3 bg-blue-950 text-white rounded font-semibold"
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
        <hr className="border-blue-600 mt-2" />
        {showTable && <FlightTable datas={datas} />}
      </div>
    </form>
  );
};

export default Form;
