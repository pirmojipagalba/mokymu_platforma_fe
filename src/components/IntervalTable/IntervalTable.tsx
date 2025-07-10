import React from 'react';
import './intervaltable.scss';

const IntervalTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Reikalavimas</th>
          <th>Vykdymo dažnumas / sąlygos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Teritorija turi būti tvarkinga, švari. Žolė – nušienauta. Žiemą takeliai – pabarstyti smėliu, neslidūs.</td>
          <td>Nuolat, pagal sezoną</td>
        </tr>
        <tr>
          <td>Žaidimų aikštelių smėlis keičiamas ar atnaujinamas. Turi būti be askaridžių, plaukagalvių, toksokarų kiaušinėlių.</td>
          <td>Kiekvieną pavasarį ir pagal epidemiologinę situaciją</td>
        </tr>
        <tr>
          <td>Nenaudojamos smėlio dėžės turi būti uždengiamos.</td>
          <td>Kiekvieną kartą po naudojimo</td>
        </tr>
        <tr>
          <td>Šiukšlių konteineriai reguliariai ištuštinami.</td>
          <td>Pagal poreikį</td>
        </tr>
        <tr>
          <td>Patalpos ir įrenginiai valomi drėgnu būdu.</td>
          <td>Kasdien ir pagal poreikį</td>
        </tr>
        <tr>
          <td>Santechnika (unitazai, praustuvės) – tvarkinga ir švari.</td>
          <td>Nuolat</td>
        </tr>
        <tr>
          <td>Valymo ir dezinfekcijos priemonės laikomos vaikams neprieinamoje vietoje.</td>
          <td>Visada</td>
        </tr>
        <tr>
          <td>Tualetų ir vonių valymo inventorius ženklinamas ryškia spalva, laikomas atskirai nuo kitų patalpų inventoriaus.</td>
          <td>Nuolat</td>
        </tr>
        <tr>
          <td>Indai ir įrankiai plaunami tam skirtomis priemonėmis.</td>
          <td>Po kiekvieno naudojimo</td>
        </tr>
        <tr>
          <td>Langai, šviestuvai valomi.</td>
          <td>Pagal poreikį</td>
        </tr>
        <tr>
          <td>Patalynė, rankšluosčiai keičiami.</td>
          <td>Pagal poreikį, bet ne rečiau kaip 1 kartą per savaitę</td>
        </tr>
        <tr>
          <td>Švari patalynė ir rankšluosčiai laikomi spintose. Nešvari – specialiuose maišuose ar talpyklose.</td>
          <td>Nuolat</td>
        </tr>
        <tr>
          <td>Žaislai turi būti švarūs, saugūs, atitikti vaikų amžių.</td>
          <td>Nuolat</td>
        </tr>
        <tr>
          <td>Darbuotojai, naudojantys valymo priemones, privalo laikytis gamintojo instrukcijų ir saugos reikalavimų.</td>
          <td>Visada</td>
        </tr>
        <tr>
          <td>Užkrečiamųjų ligų židinių aplinkos kenksmingumo pašalinimas atliekamas pagal nustatytą tvarką.</td>
          <td>Pagal teisės aktą</td>
        </tr>
        <tr>
          <td>Patalpose neturi būti graužikų ir nariuotakojų. Atliekama nuolatinė stebėsena ir, nustačius pėdsakų – naikinimas.</td>
          <td>Nuolat</td>
        </tr>
        <tr>
          <td>Draudžiama atlikti dezinfekciją, dezinsekciją, deratizaciją ar remontą vaikams esant patalpose. Remonto vietos turi būti izoliuotos.</td>
          <td>Pagal poreikį, laikantis saugos</td>
        </tr>
      </tbody>
    </table>
  );
};

export default IntervalTable;
