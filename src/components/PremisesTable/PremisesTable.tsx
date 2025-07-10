import React from 'react';
import './premisestable.scss';

const PremisesTableComponent = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Eilės numeris</th>
          <th>Patalpos pavadinimas</th>
          <th>Apšvieta, lx</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Patalpos, kuriose įrengtos vaikų individualios veiklos vietos, stacionarios kompiuterizuotos vietos, pamokų ruošos kambarys (jei yra įrengtas), bendrasis kambarys, miegamasis</td>
          <td>300</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Renginių ir kūno kultūros salė</td>
          <td>200</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Judėjimo keliai, laiptinės, koridoriai</td>
          <td>100</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Asmens higienos patalpos</td>
          <td>100</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Virtuvė</td>
          <td>300</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PremisesTableComponent;
