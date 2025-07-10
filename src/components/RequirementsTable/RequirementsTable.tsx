import React from "react";
import "./requirementstable.scss";

const RequirementsTable = () => {
  return (
    <table className="requirements-table">
      <thead>
        <tr>
          <th>GERAI ĮRENGTA DARBO KOMPIUTERIU VIETA</th>
          <th>NETEISINGAI DIRBAMA KOMPIUTERIU, JEIGU:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>
              Dirbti galima tik su kokybiškais, techniškai tvarkingais ir
              sertifikuotais kompiuteriais.
            </span>
            <span>
              Darbo su kompiuteriu vieta turi būti pakankamai apšviesta.
              Neturėtų būti pašalinių blyksnių.
            </span>
            <span>
              Stalo aukštis turi būti toks, kad dirbant rankos nebūtų pakeltos
              aukštyn arba pernelyg nuleistos žemyn.
            </span>
            <span>Darbo stalo paviršius turi būti tvirtas ir stabilus.</span>
            <span>
              Jei turite galimybę, geriausia darbo vietoje turėti reguliuojamo
              aukščio kėdę. Tuomet galima teisingame aukštyje išlaikyti regėjimo
              kampą.
            </span>
            <span>
              Patalpos, kuriose dirbama kompiuteriu, turi būti nuolatos
              vėdinamos.
            </span>
          </td>
          <td>
            <span>
              Įtemptai dirbama ar žaidžiama kompiuteriu 1 – 2 valandas ir
              daugiau be pertraukos.
            </span>
            <span>
              Dirbant kompiuteriu sėdima persikreipus, o pėdos nėra iki galo
              atremtos į grindis.
            </span>
            <span>
              Atstumas tarp dirbančiojo akių ir monitoriaus mažesnis nei 40 cm.
            </span>
            <span>
              Patalpoje, kurioje dirbama kompiuteriu yra prieblanda, arba
              visiškai tamsu.
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RequirementsTable;
