import React from "react";
import "./transporttable.scss";

const TransportTable = () => {
  return (
    <table className="transport-table">
      <thead>
      <tr>
        <th>Rodiklis</th>
        <th>Leidžiama vertė</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Oro temperatūra žiemą</td>
        <td>+16 °C – +24 °C</td>
      </tr>
      <tr>
        <td>Oro temperatūra vasarą</td>
        <td>+18 °C – +28 °C</td>
      </tr>
      <tr>
        <td>Oro drėgmė</td>
        <td>40–70 %</td>
      </tr>
      <tr>
        <td>Oro judėjimo greitis</td>
        <td>iki 0,2 m/s (šaltuoju metu), iki 0,5 m/s (šiltesniu)</td>
      </tr>
      <tr>
        <td>CO₂ koncentracija</td>
        <td>ne daugiau kaip 1000 ppm</td>
      </tr>
      </tbody>
    </table>
  );
};

export default TransportTable;
