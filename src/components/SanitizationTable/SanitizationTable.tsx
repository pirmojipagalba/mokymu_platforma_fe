import React from "react";
import "./sanitizationtable.scss";

const SanitizationTable = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>
            Visi sanitariniai įrenginiai turi būti veikiantys ir techniškai
            tvarkingi.
          </td>
        </tr>
        <tr>
          <td>
            Tualeto ir prausyklos patalpoje turi būti asmens higienos priemonių:
            tualetinio popieriaus, muilo, rankų džiovintuvai ar vienkartinių
            rankšluosčių.
          </td>
        </tr>
        <tr>
          <td>
            Kiekvienam vaikui turi būti numatyta lova, pagalvė, antklodė, lovos
            skalbiniai ir ne mažiau kaip 2 rankšluosčiai. Rankšluosčius ir lovos
            skalbinius į stovyklą vaikai gali atsivežti patys. Apie tai, kad
            stovykloje nebus aprūpinama minėtomis priemonėmis, turi būti
            informuojama iš anksto.
          </td>
        </tr>
        <tr>
          <td>
            Įrenginiai ir baldai turi būti saugūs, tvarkingi. Praustuvai,
            unitazai turi būti įrengti vaikams pasiekiamame, patogiame naudotis
            aukštyje.
          </td>
        </tr>
        <tr>
          <td>
            Jei stovykla aprūpina lovos skalbiniais ir (ar) rankšluosčiais,
            panaudoti skalbiniai skalbiami pagal sutartį su skalbimo paslaugų
            teikėjais skalbykloje arba stovykloje įrengtoje atskiroje patalpoje
            (zonoje), kurioje sumontuota skalbimo ir džiovinimo įranga. Jeigu
            skalbiniai skalbiami pagal sutartį su skalbimo paslaugų teikėjais,
            sutartis turi būti laikoma stovykloje, vadovo nustatytoje vietoje.
          </td>
        </tr>
        <tr>
          <td>
            Visų stovyklos patalpų grindų danga turi būti lygi, neslidi ir
            lengvai valoma drėgnuoju būdu. Dušų, tualetų, prausyklų ir skalbimo
            patalpos (zonos) sienos turi būti lygios ir lengvai valomos
            drėgnuoju būdu.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SanitizationTable;
