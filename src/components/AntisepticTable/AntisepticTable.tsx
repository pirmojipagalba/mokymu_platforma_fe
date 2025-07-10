import React from "react";
import "./antiseptictable.scss";

const AntisepticTable = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>1</td>
          <td>
            Ant sausų švarių rankų (į saują) alkūne, dilbiu ar išorine plaštakos
            puse iš dozatoriaus išspaudžiama reikalinga alkoholinio rankų
            antiseptiko dozė ir išskirstoma ant abiejų rankų plaštakų.
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            Alkoholiniu antiseptiku trinamaisiais ir sukamaisiais judesiais
            kruopščiai trinami riešai, tarpupirščiai, pirštų galiukai, nagai,
            nykščiai.
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            Plaštakos visą trynimo laiką turi būti drėgnos, jei reikia, užpilama
            rankų antiseptiko papildomai.
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            Rankos (jei dirbote be pirštinių), suteptos krauju ir (ar) kitais
            kūno skysčiais, ekskretais arba lietus jomis daiktus, paviršius,
            užterštus krauju ir (ar) kitais kūno skysčiais, ekskretais,
            plaunamos ir atliekama higieninė rankų antiseptika, o nesant
            galimybės –atliekama tik higieninė rankų antiseptika.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AntisepticTable;
