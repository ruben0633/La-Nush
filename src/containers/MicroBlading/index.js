import React from 'react';

import './style.css';
import '../../style.css';
import {Title,LineText,InfoCard} from '../../components';

const MicroBladin = () => {
  return (
    <article className="MicroBlading">
      <div className="mcroblanding_title">
        <Title
          title1="MICROBLADING"
          title2="UND CHATTIERUNG"
          subTitle="Umwerfende Augenbrauen"
          desc1="Gepflegte, schöne und kräftige Brauen liegen im Trend – und jeder kann sie haben! Setzen auch Sie auf die innovative Methode zur Verdichtung und Modellierung Ihrer Augenbrauen."
          desc2="Basierend auf eine traditionelle, japanische Technik werden mittels feiner Nadeln individuelle Augenbrauenhärchen aufgezeichnet – eine moderne und dauerhafte Alternative zum Permanent Make – Up!"
          flexName="flexible jEnd aCenter"
          className="microblanding_title"
          width="632px"/>
      </div>

      <section className="size">
        <div className="row flexible aStart jBetween">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Ablauf der Behandlung"
            width="47.5%"/>

          <InfoCard
            textData={["Sie erhalten eine persönliche und typgerechte Beratung, welche auf Ihre Brauen – und Gesichtsform sowie Haarfarbe abgestimmt wird. Nach der Ausmessung Ihrer Augenbrauen werden die zu behandelnden Stellen lokal betäubt.",
            'Die Pigmentierung dauert in der Regel gesamt etwa zwei Stunden.'
        ]}
            bgColor="rgba(236,204,164,0.41)"/>
        </div>

        <div className="row flexible aStart jBetween">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Was ist vor der Behandlung zu beachten?"
            width="47.5%"/>

          <InfoCard
            textData={['Meiden Sie in den ersten 7 – 10 Tagen jegliche Art von Sport, Solarium, Sonne, Sauna oder das Schminken an der pigmentierten Stelle. Verwenden Sie an den entsprechenden Partien keine Peelings. ']}
            bgColor="rgba(236,204,164,0.41)"
            listStyle="disc"/>
        </div>

        <section className="microSize">
        <LineText
            lineStyle="1px solid"
            headTitle="Microblading Eyebrows / Shadow"
            textColor="#a6815b"
            width="100%"/>

        <LineText
            lineStyle="1px dashed"
            textTitleLeft={["Microblading / Schattierung"]}
            textTitleRight="300€"
            flexName="flexible jBetween"
            width="100%"/>

        <LineText
            lineStyle="1px dashed"
            textTitleLeft={[
                "Auffrischung",
                "innerhalb der ersten 6 Monate"
            ]}
            textTitleRight="90€"
            flexName="flexible jBetween aEnd"
            width="100%"
            />

        <LineText
            lineStyle="1px dashed"
            textTitleLeft={[
                "Erstes Nachstechen"
            ]}
            textTitleRight="150€"
            flexName="flexible jBetween"
            width="100%"/>

        <LineText
            lineStyle="1px dashed"
            textTitleLeft={[
                "Korrektur/ Nacharbeit Fremdstudio"
            ]}
            textTitleRight="200€    "
            flexName="flexible jBetween"
            width="100%"/>

        </section>
      </section>
    </article>
  )
}
export default MicroBladin