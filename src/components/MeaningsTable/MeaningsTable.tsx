import React from "react";
import "./meaningstable.scss";

const MeaningsTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Sąvoka</th>
          <th>Apibrėžimas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Maistas (arba „maisto produktas")</td>
          <td>
            Tai medžiaga arba produktas, perdirbtas, perdirbtas iš dalies arba
            neperdirbtas, kurį žmogus nurys arba pagrįstai tikimasi, kad nurys.
          </td>
        </tr>
        <tr>
          <td>Maisto sauga</td>
          <td>
            Tam tikrų sąlygų sudarymas maisto gaminimo įmonėse, kad būtų
            užtikrinta maisto kokybė ir apsaugotas maistas nuo užteršimo ir
            apnuodijimo.
          </td>
        </tr>
        <tr>
          <td>Maisto higiena</td>
          <td>
            Maisto higiena apima visas sritis, susijusias su maisto saugumo
            priemonėmis, saugos reikalavimais ruošiant, laikant ir apdorojant
            įvairius maisto produktus ir žaliavas.
          </td>
        </tr>
        <tr>
          <td>Maisto tarša</td>
          <td>
            Tai medžiagos, kurios sugadina ar užteršia maistą, nuo kurių maistas
            tampa netinkamu vartoti. Maisto tarša visuomet susijusi su
            neigiamomis pasekmėmis, neigiamomis emocijomis, ūmių apsinuodijimų
            ar ūmių infekcinių žarnyno susirgimų protrūkiais.
          </td>
        </tr>
        <tr>
          <td>Kryžminė tarša</td>
          <td>
            Procesas, kurio metu maistas yra užteršiamas bakterijomis ir
            įvairiomis kenksmingomis medžiagomis.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MeaningsTable;
