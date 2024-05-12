

const FlightTable = ({ datas }) => {
  return (
    <div className="mt-3">
      <p className="font-semibold text-xl">Data parsed successfully</p>
      {/* Your table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>FLIGHT</th>
              <th>AIRCRAFT</th>
              <th>CLASS</th>
              <th>FARE</th>
              <th>ROUTE</th>
              <th>DEPARTURE</th>
              <th>ARRIVAL</th>
              <th>DURATION</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((flight, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {flight.itineraries[0]?.segments[0]?.carrierCode}
                  {flight.itineraries[0]?.segments[0]?.aircraft} --
                  {flight.itineraries[0]?.segments[0]?.carrierCode}
                  {flight.itineraries[0]?.segments[1]?.aircraft}
                </td>
                <td>
                  {flight.itineraries[0]?.segments[0]?.flightNumber} -
                  {flight.itineraries[0]?.segments[1]?.flightNumber}
                </td>
                <td>{flight.class[0]}</td>
                <td> {flight.fareBasis[0]}</td>
                <td>
                  {flight.itineraries[0]?.segments[0]?.arrival?.iataCode} -
                  {flight.itineraries[0]?.segments[0]?.departure?.iataCode}
                </td>
                <td>{flight.itineraries[0]?.segments[0]?.departure?.at}</td>
                <td>{flight.itineraries[0]?.segments[0]?.arrival?.at}</td>
                <td>{flight.itineraries[0].duration}</td>
                <td>{flight.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightTable;
