import React from "react";
import "./maitenancetable.scss";

const MaitenanceTable = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>Laiptų ir laiptų aptvarams reikalavimai.</td>
        </tr>
        <tr>
          <td>Įstiklintų durų ženklinimas. </td>
        </tr>
        <tr>
          <td>Kiekvienai grupei kokios turi būti įrengtos patalpos.</td>
        </tr>
        <tr>
          <td>
            Vienam vaikui iki 3 metų amžiaus skirta grupės patalpų / erdvių
            plotas kv.{" "}
          </td>
        </tr>
        <tr>
          <td>3 metų ir vyresniam vaikui skirtas plotas kv.</td>
        </tr>
        <tr>
          <td>Specialiųjų poreikių turinčiam vaikui plotas kv. </td>
        </tr>
        <tr>
          <td>
            Jei vaikai maitinami grupėje, turi būti įrengta patalpa / erdvė su
            plautuve grupių indams plauti arba automatine indų plovimo mašina ir
            plautuve rankoms plauti, vieta indams ir stalo įrankiams laikyti.
          </td>
        </tr>
        <tr>
          <td>
            Bendroje valgymo salėje ar šalia jos turi būti įrengta vieta grupių
            indams ir stalo įrankiams laikyti, plautuvė grupių indams plauti
            arba automatinė indų plovimo mašina ir plautuvė rankoms plauti.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MaitenanceTable;
