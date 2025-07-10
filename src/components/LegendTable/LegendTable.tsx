import React from 'react';
import './legendtable.scss';

const LegendTable = () => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Sąvoka</th>
        <th>Apibrėžimas</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>A kategorijos grožio paslauga</td>
        <td>Grožio paslauga, kurią teikiant pažeidžiama paslaugos gavėjo oda arba gleivinė ir tam skirtas instrumentas gali būti užteršiamas krauju arba kitais kūno skysčiais. Prie šių paslaugų priskiriamos tatuiravimo, ilgalaikio makiažo, papuošalų vėrimo, plaukų skutimo, manikiūro ir pedikiūro (kai karpomos nagų odelės) ir kitos invazinės grožio paslaugos.</td>
      </tr>
      <tr>
        <td>B kategorijos grožio paslauga</td>
        <td>Grožio paslauga, kurią teikiant nepažeidžiama paslaugos gavėjo oda arba gleivinė. Prie šių paslaugų priskiriamos veido ir kūno, plaukų priežiūros, manikiūro ir pedikiūro (kai nekarpomos nagų odelės), plaukų šalinimo vašku ar pan., dekoratyvinės kosmetikos ir kitos neinvazinės paslaugos.</td>
      </tr>
      <tr>
        <td>Dekoratyvinės kosmetikos paslauga</td>
        <td>Paslauga, kurią teikiant ant paslaugos gavėjo epidermio, plaukų, nagų, lūpų užtepama, užpurškiama, užklijuojama ar pan. tam tikro dekoratyvinės kosmetikos gaminio.</td>
      </tr>
      <tr>
        <td>Dezinfekcija</td>
        <td>Daugelio arba visų mikroorganizmų, išskyrus bakterijų sporas, sunaikinimas aplinkoje fizinėmis ir cheminėmis priemonėmis.</td>
      </tr>
      <tr>
        <td>Grožio paslauga</td>
        <td>Paslauga, kurios tikslas – įvairiomis priemonėmis ir būdais išlaikyti ar pagerinti žmogaus plaukų, veido, kūno, nagų išvaizdą, apsaugoti ir (arba) palaikyti gerą plaukų, odos, nagų būklę, paryškinti patraukliuosius bruožus ir kuri teikiama naudojant priemones ar prietaisus, kurie pagal gamintojo nurodytas instrukcijas skirti buitiniam ir (arba) grožio paslaugų teikėjo profesionaliajam naudojimui.</td>
      </tr>
      <tr>
        <td>Instrumento valymas</td>
        <td>Pirminis teršalų nušluostymas nuo instrumento, jo mirkymas ir plovimas, skalavimas vandeniu.</td>
      </tr>
      <tr>
        <td>Ilgalaikio makiažo paslauga</td>
        <td>Specialių dažų ar pigmentų įterpimas į odą veido srityje, paryškinant ar pakoreguojant antakių, akių, lūpų kontūrus.</td>
      </tr>
      <tr>
        <td>Nagų priežiūros paslauga</td>
        <td>Manikiūro, pedikiūro, dirbtinių nagų priauginimo ar kita su nagų priežiūra susijusi grožio paslauga.</td>
      </tr>
      <tr>
        <td>Papuošalų vėrimo paslauga</td>
        <td>Papuošalų vėrimas į kurią nors kūno vietą.</td>
      </tr>
      <tr>
        <td>Plaukų priežiūros paslauga</td>
        <td>Plaukų plovimo, plaukų kaukių dėjimo, kirpimo, skutimo, šukuosenos formavimo, dažymo, ilgalaikio plaukų sušukavimo, plaukų priauginimo, tiesinimo ar kita su plaukų priežiūra susijusi grožio paslauga.</td>
      </tr>
      <tr>
        <td>Sanitizatorius</td>
        <td>Įrenginys, kuriame išvalyti instrumentai dezinfekuojami ultravioletiniais spinduliais.</td>
      </tr>
      <tr>
        <td>Sterilizacija</td>
        <td>Mikroorganizmų ir jų sporų sunaikinimas fizinėmis ir cheminėmis priemonėmis.</td>
      </tr>
      <tr>
        <td>Sterilus instrumentas</td>
        <td>Instrumentas, ant kurio nėra gyvybingų mikroorganizmų ir jų sporų.</td>
      </tr>
      <tr>
        <td>Tatuiravimo paslauga</td>
        <td>Ilgalaikio ženklo ar piešinio ant odos atlikimas adata įterpiant specialių dažų ar pigmentų.</td>
      </tr>
      <tr>
        <td>Veido ir kūno priežiūros paslauga</td>
        <td>Odos valymo, maitinimo, drėkinimo, kosmetinių kaukių dėjimo, plaukų šalinimo, masažo (išskyrus gydomojo masažo) ar kita su veido ir kūno priežiūra susijusi grožio paslauga.</td>
      </tr>
      </tbody>
    </table>
  );
};

export default LegendTable;
