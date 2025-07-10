import React from "react";
import "./feedingtable.scss";

const FeedingTable = () => {
  return (
    <table className="feeding-table">
      <thead>
      <tr>
        <th>Vaikų iki 1 m. amžiaus maitinimo reikalavimai</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
        <strong>0‒6 mėn.</strong> amžiaus vaikams tiekiamas motinos pienas, jo nesant,
        pradinio maitinimo kūdikių mišinys.
        </td>
      </tr>
      <tr>
        <td>
        <strong>6‒7 mėn.</strong> amžiaus vaikams turi būti tiekiamas motinos pienas, jo nesant, tolesnio maitinimo kūdikių mišinys; 
        dviejų‒trijų daržovių (bulvių, cukinijų, moliūgų, morkų, ropių, burokėlių, brokolių, žiedinių kopūstų ir kopūstų) trintos košės, 
        pagardintos šalto spaudimo aliejumi; smulkintų vienos rūšies kruopų (grikių, ryžių, avižų, miežių ar kukurūzų) košės (be pieno). 
        Prie tiršto maisto tiekiamas geriamasis vanduo.
        </td>
      </tr>
      <tr>
        <td>
        <strong>7‒8 mėn.</strong> amžiaus vaikams turi būti tiekiamas motinos pienas, jo nesant, mišinys; 
        košės, pagardintos sviestu ar šalto spaudimo aliejumi; mėsa (paukštiena, veršiena, triušiena ar kiauliena) su koše. 
        Atskiro maitinimo metu tiekiami trinti vaisiai (obuoliai, slyvos, persikai) ar uogos. 
        Prie tiršto maisto tiekiamas geriamasis vanduo.
        </td>
      </tr>
      <tr>
        <td>
        <strong>8‒9 mėn.</strong> amžiaus vaikams turi būti tiekiamas motinos pienas, jo nesant, mišinys; 
        dviejų‒trijų daržovių košės; vienos ar kelių rūšių kruopų košės. Košės gardinamos prieskoninėmis žolelėmis, 
        sviestu ar šalto spaudimo aliejumi. Tiekiama mėsa, smulkintas kiaušinio trynys. 
        Atskiro maitinimo metu tiekiami trinti ar smulkinti vaisiai ar uogos. Prie tiršto maisto tiekiamas geriamasis vanduo.
        </td>
      </tr>
      <tr>
        <td>
        <strong>9‒11 mėn.</strong> amžiaus vaikų valgiaraščiai papildomi smulkintais melionais, bananais, pomidorais, 
        kefyru ir natūraliu jogurtu.
        </td>
      </tr>
      <tr>
        <td>
        <strong>11‒12 mėn.</strong> amžiaus vaikų valgiaraščiai papildomi smulkintais kiviais ir 
        varškės patiekalais, pagamintais tausojančiu būdu.
        </td>
      </tr>
      </tbody>
    </table>
  );
};

export default FeedingTable;
