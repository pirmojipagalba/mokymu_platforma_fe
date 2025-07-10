import React from "react";
import "./luminositytable.scss";

const LuminosityTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Eil. Nr.</th>
          <th>Patalpos pavadinimas</th>
          <th>Apšvieta, lx</th>
          <th>Paviršius, kuriam taikoma apšvieta</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mokymo klasė, mokymo kabinetas</td>
          <td>300</td>
          <td>stalo horizontalus paviršius</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>500</td>
          <td>lentos vertikalus paviršius</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            Gamtos mokslų kabinetas, konstrukcinių medžiagų dirbtuvės,
            elektronikos mokymo kabinetas, mokomoji virtuvė, tekstilės mokymo
            kabinetas, skaitykla
          </td>
          <td>500</td>
          <td>stalo horizontalus paviršius</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Informacinių technologijų mokymo kabinetas</td>
          <td>300</td>
          <td>stalo horizontalus paviršius</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>100</td>
          <td>monitoriaus vertikalus paviršius</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Sporto salė</td>
          <td>300</td>
          <td>ant grindų paviršiaus</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Aktų salė</td>
          <td>200</td>
          <td>ant grindų paviršiaus</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Persirengimo kambarys, drabužinė, tualetas, dušas</td>
          <td>200</td>
          <td>ant grindų paviršiaus</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Laiptinė</td>
          <td>150</td>
          <td>ant grindų paviršiaus</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Koridorius</td>
          <td>100</td>
          <td>ant grindų paviršiaus</td>
        </tr>
      </tbody>
    </table>
  );
};

export default LuminosityTable;
