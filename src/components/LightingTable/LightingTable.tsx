import React from 'react';
import './lightingtable.scss';

const LightingTable = () => {
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
        <td>Grupės žaidimų patalpa / erdvė, patalpa, kurioje įrengtos kompiuterizuotos vietos vaikams</td>
        <td>300</td>
        <td>horizontalus paviršius 0,5m aukštyje nuo grindų</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Kūno kultūros ir (ar) muzikos salė (jei įrengta)</td>
        <td>200</td>
        <td>horizontalus paviršius 0,5m aukštyje nuo grindų</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Grupės priėmimo-nusirengimo patalpa / erdvė</td>
        <td>200</td>
        <td>horizontalus paviršius 0,8m aukštyje nuo grindų</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Grupės miegamasis (jei įrengtas atskirai)</td>
        <td>75</td>
        <td>horizontalus paviršius 0,5m aukštyje nuo grindų</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Grupės tualetas-prausykla, judėjimo keliai, laiptinės, koridoriai</td>
        <td>100</td>
        <td>horizontalus paviršius 0,5m aukštyje nuo grindų</td>
      </tr>
      </tbody>
    </table>
  );
};

export default LightingTable;
