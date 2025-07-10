import React from "react";
import "./chirurgicalhandtable.scss";

const ChirurgicalHandTable = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>1</td>
          <td>
            Rankos plaunamos ne trumpiau kaip 1 min. Prieš pirmą darbo dienos
            operaciją būtina rankas plauti iki alkūnių.
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            Nuplautos rankos sausinamos (netrinant) vienkartinėmis švariomis
            servetėlėmis; kiekviena ranka sausinama atskira servetėle. Rankos
            pradedamos sausinti nuo pirštų ir baigiamos alkūnių sausinimu,
            neliečiant ta pačia servetėle anksčiau nusausintos odos vietų.
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            Alkūne, dilbiu ar išorine plaštakos puse paspaudžiama antiseptiko
            dozatoriaus rankenėlė, sudrėkinama ir įtrinama rankų plaštakų,
            riešų, dilbių oda alkoholiniu antiseptiniu tirpalu.
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            Trinamaisiais, sukamaisiais judesiais rankų oda trinama 2 kartus šia
            tvarka: plaštakos, riešai, dilbiai ir alkūnės, dar kartą dilbiai,
            riešai, plaštakos. Ypač kruopščiai įtrinami riešai, tarpupirščiai,
            pirštų galiukai, nagai, nykščiai.
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            Visą antiseptikos laiką trinama oda turi būti drėgna, jei reikia,
            papildomai užpilama antiseptiko tirpalo. Paskutinė antiseptiko dozė
            trinama, kol oda išdžiūsta.
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Užsimaunamos vienkartinės sterilios medicininės pirštinės.</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ChirurgicalHandTable;
