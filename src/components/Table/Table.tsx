import React from 'react';
import './table.scss';

const TableComponent = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Kaulų lūžiai</th>
          <th>Sąnarių išnirimai</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Skausmas</td>
          <td>Dažniausiai stiprus ir lokalizuotas</td>
          <td>Stiprus skausmas ties sąnariu</td>
        </tr>
        <tr>
          <td>Patinimas</td>
          <td>Lūžio vietoje greitai atsiranda patinimas</td>
          <td>Greitai atsiranda patinimas, mėlynės</td>
        </tr>
        <tr>
          <td>Deformacija</td>
          <td>Matoma kaulo deformacija ar neįprasta galūnės padėtis</td>
          <td>Ryški sąnario deformacija</td>
        </tr>
        <tr>
          <td>Judrumas</td>
          <td>Galūnė juda ten, kur neturėtų </td>
          <td>Sąnarys tampa nejudrus arba standus</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
