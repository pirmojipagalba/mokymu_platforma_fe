import React from "react";
import "./microbialsizetable.scss";

const MicrobialSizeTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Eil. Nr.</th>
          <th>Kosmetikos gaminio fizikiniai ir cheminiai rodikliai</th>
          <th>Ribiniai dydžiai</th>
          <th>Kosmetikos gaminių pavyzdžiai</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>pH</td>
          <td>≤ 3,0</td>
          <td>Odos šveitikliai (glikolio rūgšties pagrindu)</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>pH</td>
          <td>≥ 10,0</td>
          <td>Plaukų tiesinimo priemonės</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Bevandenis kosmetikos gaminys</td>
          <td></td>
          <td>Kūno aliejai, pieštukai</td>
        </tr>
        <tr>
          <td>4.</td>
          <td>Kosmetikos gaminio galutinės formulės vandens aktyvumas (aw)</td>
          <td>≤ 0,75</td>
          <td>
            Lūpų balzamas, lūpų dažai, skaistalai, gabaliniai tualetiniai muilai
            ir gabaliniai kietieji prausikliai
          </td>
        </tr>
        <tr>
          <td>5.</td>
          <td colSpan={3}>
            Kosmetikos gaminio sudėtyje esančių cheminių medžiagų ar jų junginių
            kiekis:
          </td>
        </tr>
        <tr>
          <td>5.1.</td>
          <td>etilo ir kitas alkoholis</td>
          <td>≥ 20 %</td>
          <td>Plaukų purškikliai, tonikai, kvepalai</td>
        </tr>
        <tr>
          <td>5.2.</td>
          <td>
            organiniai tirpikliai: etilacetatas (Ethyl acetate), butilacetatas
            (Butyl acetate)
          </td>
          <td> 10,0 %</td>
          <td>Gaminiai tirpiklių pagrindu: pvz., nagų emaliai</td>
        </tr>
        <tr>
          <td>5.3.</td>
          <td colSpan={3}>Šarminiai junginiai:</td>
        </tr>
        <tr>
          <td>5.3.1.</td>
          <td>amoniakas (Ammonia)</td>
          <td>≥ 0,5 %</td>
          <td>
            Oksiduojantieji gaminiai, plaukų dažai, ilgalaikio formavimo
            gaminiai
          </td>
        </tr>
        <tr>
          <td>5.3.2.</td>
          <td>monoetanolaminas (Monoethanolamine)</td>
          <td>≥ 1 %</td>
          <td>
            Oksiduojantieji gaminiai, plaukų dažai, ilgalaikio formavimo
            gaminiai
          </td>
        </tr>
        <tr>
          <td>5.4.</td>
          <td>aliuminio chlorhidratas (Aluminium chlorohydrate)</td>
          <td>≥ 25 %</td>
          <td>Antiperspirantai</td>
        </tr>
        <tr>
          <td>5.5.</td>
          <td>vandenilio peroksidas (Hydrogen peroxyde)</td>
          <td>≥ 3 %</td>
          <td>Plaukų šviesinimo gaminiai</td>
        </tr>
        <tr>
          <td>6.</td>
          <td>
            Kosmetikos gaminio gamybos sąlygos: kosmetikos gaminio temperatūra
            gamybos proceso metu
          </td>
          <td>≥ 65,0 °C</td>
          <td>Lūpų balzamas, lūpų dažai, skaistalai</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MicrobialSizeTable;
