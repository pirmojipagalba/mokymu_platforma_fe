import React from 'react';
import './temperaturetablepremises.scss';

const TemperatureTablePremises = () => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Eil. Nr.</th>
        <th>Patalpos pavadinimas</th>
        <th>Oro temperatūra, °C</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>Grupės priėmimo-nusirengimo, žaidimų patalpa / erdvė, sveikatos kabinetas</td>
        <td>20–23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Grupės miegamasis (jei įrengtas atskirai)</td>
        <td>18–22</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Grupės tualetas-prausykla</td>
        <td>19–23</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Kūno kultūros ir (ar) muzikos salė (jei įrengta)</td>
        <td>18–20</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Patalpa, kurioje įrengtos kompiuterizuotos vietos vaikams</td>
        <td>20–22</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Judėjimo keliai, laiptinės, koridoriai</td>
        <td>18–21</td>
      </tr>
      </tbody>
    </table>
  );
};

export default TemperatureTablePremises;
