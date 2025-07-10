import React from "react";
import "./illnesstable.scss";

const IllnessTable = () => {
  return (
    <table className="illness-table">
      <tbody>
        <tr>
          <th colSpan={2}>UŽKREČIAMŲJŲ LIGŲ PERDAVIMAS</th>
        </tr>
        <tr>
          <td colSpan={2}>
            Infekcijos šaltinis ← → Imlus organizmas ← → Perdavimo kelias
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            Pašalinus nors vieną iš šių veiksnių epidemija ir infekcinės ligos
            nebeplinta.
          </td>
        </tr>
        <tr>
          <th colSpan={2}>UŽKREČIAMŲJŲ LIGŲ PROFILAKTIKA</th>
        </tr>
        <tr>
          <td colSpan={2}>
            <div className="illness-table__content">
              <p>Profilaktikos priemonės nukreiptos į infekcinio susirgimo plitimo grandines:</p>
              
              <div >
                <h4>Sergantis organizmas ir sukėlėjas</h4>
                <ul>
                  <li>Ankstyvas sergančiųjų ir nešiotojų išaiškinimas ir gydymas</li>
                  <li>Sergančiųjų ir nešiotojų izoliacija</li>
                  <li>Kontaktų išaiškinimas</li>
                  <li>Aplinkos dezinsekcija, deratizacija</li>
                </ul>
              </div>
              
              <div >
                <h4>Plitimo kelias</h4>
                <ul>
                  <li>Asmens higienos priemonės</li>
                  <li>Maisto ruošimo taisyklių paisymas, maisto produktų tikrinimas</li>
                  <li>Masinio susibūrimo vietų vengimas epidemijos metu</li>
                  <li>Aplinkos dezinfekcija</li>
                  <li>Patalpų vėdinimas</li>
                  <li>Kraujo donorų ir kraujo produktų tikrinimas</li>
                </ul>
              </div>
              
              <div >
                <h4>Imlus organizmas</h4>
                <ul>
                  <li>Kontakto vengimas</li>
                  <li>Imuniteto stiprinimas</li>
                  <li>Individualių apsaugos priemonių naudojimas</li>
                  <li>Imunoprofilaktika</li>
                </ul>
              </div>
              
              <h4>Ką galiu padaryti pats, norėdamas išvengti infekcinių susirgimų</h4>
              <ul>
                <li>Vengti kontaktų</li>
                <li>Plautis rankas</li>
                <li>Gerti tik švarų ar virintą vandenį</li>
                <li>Vartoti tik patikimus ir kokybiškus maisto produktus</li>
                <li>Stiprinti imunitetą</li>
                <li>Susirgus likti namie</li>
                <li>Pasiskiepyti</li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default IllnessTable;
