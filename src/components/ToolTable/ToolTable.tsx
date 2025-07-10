import React from "react";
import "./tooltable.scss";

const ToolTable = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>Stovyklos teritorija</td>
          <td>
            Stovyklos sklypas ir visa teritorija turi būti nuolat prižiūrimi,
            žolė nušienauta.{" "}
          </td>
        </tr>
        <tr>
          <td>Vaikų žaidimų aikštelės</td>
          <td>
            Vaikų žaidimo dėžėse esantis smėlis (jei tokios dėžės įrengtos) turi
            būti keičiamas arba atnaujinamas ne rečiau kaip kartą per metus.{" "}
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            Smėlis turi būti apsaugotas nuo užteršimo. Jame negali būti
            askaridžių, plaukagalvių, toksokarų kiaušinėlių.{" "}
          </td>
        </tr>
        <tr>
          <td>Atliekų tvarkymas</td>
          <td>
            Pripildytos buitinių atliekų talpos turi būti reguliariai
            ištuštinamos.{" "}
          </td>
        </tr>
        <tr>
          <td>Patalpų, inventoriaus ir įrangos priežiūra</td>
          <td>
            Stovyklos patalpos, įrenginiai ir inventorius turi būti nuolat
            švarūs.{" "}
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            Lovos skalbiniai keičiami juos sutepus ir po kiekvienos pamainos.
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            Dušo, tualetų įrenginiai ir patalpos turi būti reguliariai valomi ir
            dezinfekuojami.{" "}
          </td>
        </tr>
        <tr>
          <td>Valymo ir dezinfekcijos priemonės</td>
          <td>
            Visos valymo ir dezinfekcijos priemonės turi būti naudojamos pagal
            gamintojo nurodymus ir paskirtį.{" "}
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            Patalpų ir įrangos dezinfekcijai naudojamos tik teisės aktų
            nustatyta tvarka įteisintos priemonės.{" "}
          </td>
        </tr>
        <tr>
          <td></td>
          <td> Šios priemonės laikomos vaikams neprieinamoje vietoje. </td>
        </tr>
        <tr>
          <td>Kenkėjų kontrolė </td>
          <td>Patalpose neturi būti graužikų ir kitų buitinių kenkėjų. </td>
        </tr>
        <tr>
          <td></td>
          <td>Kenkėjų kontrolė vykdoma teisės akto nustatyta tvarka.</td>
        </tr>
        <tr>
          <td></td>
          <td>
            Privalomasis aplinkos kenksmingumo pašalinimas (dezinfekcija,
            dezinsekcija, deratizacija) atliekamas teisės akto [4.9] nustatyta
            tvarka pagal epidemiologines reikmes.{" "}
          </td>
        </tr>
        <tr>
          <td>Valymo inventorius</td>
          <td>
            Dušams, tualetams ir kitoms patalpoms valyti naudojamas atskiras,
            paženklintas inventorius.{" "}
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            Šis inventorius laikomas švarus, jam skirtose vietose, atskirai nuo
            kitų patalpų valymo inventoriaus.{" "}
          </td>
        </tr>
        <tr>
          <td>Defektų šalinimas</td>
          <td>
            Patalpų naudojimo metu atsiradę defektai (sienų, lubų, grindų,
            įrenginių ar inventoriaus), galintys turėti įtakos vaikų sveikatai
            ir saugumui, turi būti šalinami nedelsiant.{" "}
          </td>
        </tr>
        <tr>
          <td>Draudimai</td>
          <td>
            Griežtai draudžiama atlikti privalomąjį profilaktinį aplinkos
            kenksmingumo pašalinimą (dezinfekciją, dezinsekciją, deratizaciją)
            ar remonto darbus vaikams esant stovyklos patalpose.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ToolTable;
