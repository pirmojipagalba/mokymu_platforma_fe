import React from 'react';
import './registrytable.scss';

const RegistryTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Eilės numeris</th>
          <th>Patalpos pavadinimas</th>
            <th>Oro temperatūra, °C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Patalpos, kuriose įrengtos vaikų individualios veiklos vietos, stacionarios kompiuterizuotos vietos, pamokų ruošos kambarys, bendrasis kambarys, miegamasis</td>
          <td>18–22</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Renginių ir kūno kultūros salė</td>
          <td>17–20</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Vestibiulis, drabužinė</td>
          <td>18–20</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Tualetas</td>
          <td>18–22</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Vonios (dušo) patalpa</td>
          <td>20–24</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Laiptinės, koridoriai</td>
          <td>18–20</td>
        </tr>
      </tbody>
    </table>
  );
};

export default RegistryTable;
