import React from "react";
import "./pictogramtable.scss";

const PictogramTable = () => {
  return (
    <table className="pictogram-table">
      <thead>
        <tr>
          <th>Piktogramos pavadinimas</th>
          <th>Piktograma</th>
          <th>Reikšmė</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sprogstanti bomba</td>
          <td>
            <img src="/assets/hygieneh15/section2/0.jpg" alt="Sprogstanti bomba" />
          </td>
          <td>
            Nestabilios sprogstamosios medžiagos;<br />
            Savaime reaguojančios medžiagos ir mišiniai;<br />
            Organiniai peroksidai.
          </td>
        </tr>
        <tr>
          <td>Liepsnojantis lankas</td>
          <td>
            <img src="/assets/hygieneh15/section2/1.jpg" alt="Liepsnojantis lankas" />
          </td>
          <td>
            Oksiduojančios dujos;<br />
            Oksiduotieji skysčiai;<br />
            Oksiduojančiosios kietosios medžiagos.
          </td>
        </tr>
        <tr>
          <td>Liepsna</td>
          <td>
            <img src="/assets/hygieneh15/section2/2.jpg" alt="Liepsna" />
          </td>
          <td>
            Degiosios dujos;<br />
            Degieji aerozoliai;<br />
            Degieji skysčiai;<br />
            Degiosios kietosios medžiagos;<br />
            Savaime reaguojančios medžiagos ir mišiniai;<br />
            Piroforiniai skysčiai;<br />
            Piroforinės kietosios medžiagos;<br />
            Savaime kaistančios medžiagos ir mišiniai.
          </td>
        </tr>
        <tr>
          <td>Dujų balionas</td>
          <td>
            <img src="/assets/hygieneh15/section2/3.jpg" alt="Dujų balionas" />
          </td>
          <td>
            Slėgio veikiamos dujos;<br />
            Suslėgtosios dujos;<br />
            Suskystintosios dujos;<br />
            Atšaldytos suskystintosios dujos;<br />
            Ištirpintosios dujos;<br />
            Medžiagos ir mišiniai, kontaktuodami su vandeniu, išskiriantys degiąsias dujas;<br />
            Organiniai peroksidai.
          </td>
        </tr>
        <tr>
          <td>Korozija</td>
          <td>
            <img src="/assets/hygieneh15/section2/4.jpg" alt="Korozija" />
          </td>
          <td>
            Ėsdina metalą;<br />
            Odos ėsdinimas;<br />
            Smarkus akių pažeidimas.
          </td>
        </tr>
        <tr>
          <td>Kaukolė ir sukryžiuoti kaulai</td>
          <td>
            <img src="/assets/hygieneh15/section2/5.jpg" alt="Kaukolė ir sukryžiuoti kaulai" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Pavojai sveikatai</td>
          <td>
            <img src="/assets/hygieneh15/section2/6.jpg" alt="Pavojai sveikatai" />
          </td>
          <td>
            Kvėpavimo takų jautrinimas;<br />
            Mutageninis poveikis lytinėms ląstelėms;<br />
            Kancerogeniškumas;<br />
            Toksinis poveikis reprodukcijai;<br />
            Specifinis toksiškumas konkrečiam organui;<br />
            Plaučių pakenkimo prarijus pavojus.
          </td>
        </tr>
        <tr>
          <td>Šauktukas</td>
          <td>
            <img src="/assets/hygieneh15/section2/7.jpg" alt="Šauktukas" />
          </td>
          <td>
            Ūmus toksiškumas (prarijus, per oda, įkvėpus);<br />
            Odos dirginimas;<br />
            Akių dirginimas;<br />
            Odos jautrinimas;<br />
            Specifinis toksiškumas konkrečiam organui (vienkartinis poveikis);<br />
            Kvėpavimo takų dirginimas;<br />
            Narkotinis poveikis.
          </td>
        </tr>
        <tr>
          <td>Aplinka</td>
          <td>
            <img src="/assets/hygieneh15/section2/8.jpg" alt="Aplinka" />
          </td>
          <td>
            Pavojinga vandens aplinkai.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PictogramTable;
