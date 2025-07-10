import React from 'react';
import './microbialtable.scss';

const MicrobialTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Eil. Nr.</th>
          <th>Mikrooganizmų rūšis</th>
            <th colSpan={3}>Mikrobinio užterštumo ribinės vertės (1 g arba 1 ml)</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>I kategorijos kosmetikos gaminiai</th>
            <th>II kategorijos kosmetikos gaminiai</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>Aerobinių mezofilinių bakterijų ir mielių bei pelėsių, užaugusių standžioje terpėje, skaičius 1 g arba 1 ml (toliau – Bendras aerobinių mezofilinių bakterijų skaičius)</td>
          <td>≤ 1 x 10²*</td>
          <td>≤ 1 x 10³*</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Auksinis stafilokokas (Staphylococcus aureus)</td>
          <td>Neturi būti</td>
          <td>Neturi būti</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Žaliamėlė pseudomona (Pseudomonas aeruginosa)</td>
          <td>Neturi būti</td>
          <td>Neturi būti</td>
        </tr>
        <tr>
          <td>4.</td>
          <td>Baltasis balkšvagrybis (Candida albicans)</td>
          <td>Neturi būti</td>
          <td>Neturi būti</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>Žarninė lazdelė (Escherichia coli)</td>
          <td>Neturi būti</td>
          <td>Neturi būti</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MicrobialTable;
