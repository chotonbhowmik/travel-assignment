

const FilterTable = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 mt-2 overflow-x-auto">
        <div className="flex flex-col lg:flex-row">
          <input
            type="text"
            placeholder="LHR"
            className="input input-bordered w-full max-w-xs font-semibold lg:w-auto lg:max-w-none"
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <input
            type="text"
            placeholder="CDG"
            className="input input-bordered w-full max-w-xs font-semibold lg:w-auto lg:max-w-none"
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <input
            type="date"
            placeholder="Date"
            className="input input-bordered w-full max-w-xs lg:w-auto lg:max-w-none"
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <select className="select select-bordered w-full max-w-xs lg:w-auto lg:max-w-none">
            <option disabled selected>
              Day -
            </option>
          </select>
        </div>
        <div className="flex flex-col lg:flex-row">
          <select className="select select-bordered w-full max-w-xs lg:w-auto lg:max-w-none">
            <option disabled selected>
              Day +
            </option>
          </select>
        </div>
        <div className="flex flex-col lg:flex-row">
          <select className="select select-bordered w-full max-w-xs lg:w-auto lg:max-w-none">
            <option disabled selected>
              Anytime
            </option>
            <option>Anytime</option>
          </select>
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-3xl">+</p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col lg:flex-row">
            <select className="select select-bordered w-full max-w-xs lg:w-auto lg:max-w-none">
              <option disabled selected>
                ADT
              </option>
              <option>adt</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col lg:flex-row">
            <select className="select select-bordered w-full max-w-xs lg:w-auto lg:max-w-none">
              <option disabled selected>
                1
              </option>
              <option>2</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-3xl">+</p>
        </div>
      </div>
    );
};

export default FilterTable;