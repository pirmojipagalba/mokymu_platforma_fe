import React from 'react';
import './handtable.scss';

const HandTable = () => {
  return (
    <table className="hand-table">
      <thead>
        <tr>
          <th>RANKŲ PLOVIMO INSTRUKCIJA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ol className="hand-washing-steps">
              <li>Rankos apnuoginamos iki dilbių vidurio. Chirurginio rankų paruošimo metu rankos apnuoginamos virš alkūnių.</li>
              <li>Rankos sudrėkinamos vėsiu vandeniu.</li>
              <li>Alkūne, dilbiu ar išorine plaštakos puse paspaudžiama skysto muilo dozatoriaus rankenėlė ir užpilama apie 3 ml skysto muilo (neliečiant dozatoriaus ištekėjimo angos).</li>
              <li>Kruopščiai 10–15 sek. rankos muiluojamos trinamaisiais ir sukamaisiais judesiais, ypač riešai, tarpupirščiai, pirštų galiukai ir nagai, nykščiai.</li>
              <li>Muiluotos rankos nuplaunamos po vandens srove. Vanduo turi tekėti nuo riešo pirštų link, chirurginio rankų paruošimo metu – nuo pirštų alkūnių link.</li>
              <li>Rankos nusausinamos vienkartiniu rankšluosčiu ar servetėle. Jei vandens čiaupai užsukami ranka, juos reikia užsukti su panaudotu vienkartiniu rankšluosčiu ar servetėle.</li>
              <li>Panaudotas vienkartinis rankšluostis ar servetėlė išmetami į šiukšliadėžę.</li>
            </ol>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HandTable;
