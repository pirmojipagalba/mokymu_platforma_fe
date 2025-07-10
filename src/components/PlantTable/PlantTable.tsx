import React from 'react';
import './planttable.scss';

const PlantTable = () => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Eil. Nr.</th>
        <th>Augalas / augalų rūšys</th>
        <th>Lotyniškas pavadinimas</th>
        <th>Nuodingos augalo dalys</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>Amerikinė fitolaka</td>
        <td>Phytolacca americana</td>
        <td>Visas augalas, ypač lapai ir uogos</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Baltasis čemerys</td>
        <td>Veratrum album</td>
        <td>Visas augalas, ypač šaknys</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Brugmansijos</td>
        <td>Brugmansia spp.</td>
        <td>Visas augalas</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Darželinis pupmedis</td>
        <td>Laburnum anagyroides</td>
        <td>Visas augalas</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Juodoji drignė</td>
        <td>Hyoscyamus niger</td>
        <td>Visas augalas</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Kukmedžiai</td>
        <td>Taxus spp.</td>
        <td>Visas augalas</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Kurpelės</td>
        <td>Aconitum spp.</td>
        <td>Visas augalas, ypač lapai ir šaknys</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Lobelio čemerys</td>
        <td>Veratrum lobelianum</td>
        <td>Visas augalas, ypač šaknys</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Paprastasis ricinmedis</td>
        <td>Ricinus communis</td>
        <td>Visas augalas, ypač sėklos</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Paprastasis žalčialunkis</td>
        <td>Daphne mezereum</td>
        <td>Visas augalas</td>
      </tr>
      <tr>
        <td>11</td>
        <td>Paprastoji durnaropė</td>
        <td>Datura stramonium</td>
        <td>Visas augalas, ypač sėklos ir lapai</td>
      </tr>
      <tr>
        <td>12</td>
        <td>Paprastoji pakalnutė</td>
        <td>Convallaria majalis</td>
        <td>Visas augalas</td>
      </tr>
      <tr>
        <td>13</td>
        <td>Paprastoji rusmenė</td>
        <td>Digitalis purpurea</td>
        <td>Lapai, žiedai, sėklos</td>
      </tr>
      <tr>
        <td>14</td>
        <td>Rudeninis vėlyvis</td>
        <td>Colchicum autumnale</td>
        <td>Visas augalas</td>
      </tr>
      <tr>
        <td>15</td>
        <td>Tabakas</td>
        <td>Nicotiana spp.</td>
        <td>Visas augalas</td>
      </tr>
      <tr>
        <td>16</td>
        <td>Vaistinė šunvyšnė</td>
        <td>Atropa belladona</td>
        <td>Visas augalas, ypač uogos</td>
      </tr>
      </tbody>
    </table>
  );
};

export default PlantTable;
