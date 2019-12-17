import React from 'react';

import './style.css';
import '../../style.css';
import {Title, InfoCard, LineText} from '../../components';

const ElectricEpilation = () => {
  return (
    <article className="ElectricEpilation">
      <div className="TitleOfelectro">
        <Title
          title1="NADEL – /ELEKTRO – EPILATION"
          subTitle="Die effektivste Haarentfernungl"
          desc1="Die Haarentfernung mittels einer ultrafeinen Nadel zählt seit Jahrzehnten zu den erfolgreichsten Methoden für eine dauerhaft glatte und schöne Haut. Kleinere Körperbereiche können so nachhaltig behandelt werden – bei allen Haarfarben, Hauttypen und selbst bei gebräunter Haut!"
          width="474px"
          className="needleElectro"/>
      </div>

    <section className="size">
      <div className="row flexible aStart jBetween">
        <LineText
          lineStyle="1px solid rgb(166, 129, 91)"
          headTitle="Ablauf der Behandlung"
          width="47.5%"/>

        <InfoCard
          textData={["Diese Methode für eine dauerhafte Haarentfernung empfehlen wir grundsätzlich nur für kleinere Areale, da sie sehr zeitaufwendig ist. Bei der Nadel- /Elektroepilation wird eine Sonde sehr genau parallel zum Haarschaft bis in die Tiefe eingeführt. Bei der Behandlung wird der fließende Strom als Wärme gespürt, nicht jedoch das Einführen der Nadelsonde. Nach der Epilation lässt es sich das Haar dann fast ohne Widerstand herausnehmen. Genauso wie bei der Haarentfernung mit einem Diodenlaser können nur die Haare dauerhaft zerstört werden, sich in der Wachstumsphase befinden. Daher muss die zu behandelnde Fläche wiederholt behandelt werden, bis alle Haare komplett entfernt sind."]}
          bgColor="rgba(236,204,164,0.41)"
          />
      </div>
      
      <div className="row flexible aStart jBetween">
      <LineText
          lineStyle="1px solid rgb(166, 129, 91)"
          headTitle="Was ist vor der Behandlung zu beachten?"
          width="47.5%"/>

        <InfoCard
          textData={[
              'Entfernen Sie bitte vor der Behandlung Cremes und Make-up oder ähnliche Mittel von der zu behandelnden Stelle.',
              'Mit Behandlungsbeginn sollten die Haare nicht mehr gezupft, lediglich rasiert oder abgeschnitten werden.',
              'Nehmen Sie vor der Behandlung ausreichend Flüssigkeit zu sich und führen Sie Ihrer Haut genügend Feuchtigkeit zu.'


          ]}
          bgColor="#f3efea"
          listStyle="disc"/>
      </div>


      <div className="row flexible aStart jBetween">
      <LineText
          lineStyle="1px solid rgb(166, 129, 91)"
          headTitle="Was ist nach der Behandlung zu beachten?"
          width="47.5%"/>

        <InfoCard
          textData={[
              'Eine hautberuhigende Lotion wird nach der Behandlung aufgetragen und sollte 24 Stunden auf der Haut verbleiben.',
              'Verzichten Sie bitte 48 Stunden nach der Behandlung auf Fett – oder Feuchtigkeitscremes, Make – up, Kortisonhaltige Cremes sowie Reinigungsprodukte.',
              'Vermeiden Sie Sonnenbäder, Schwimmbäder, Saunagänge und Sonnenbänke.',
              'Verwenden Sie 48 Stunden nach der Behandlung keine Bleichcreme.'


          ]}
          bgColor="rgba(236,204,164,0.41)"
          listStyle="disc"/>
      </div>
      </section>

    </article>
  )
}
export default ElectricEpilation;