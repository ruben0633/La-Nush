import React from 'react';

import './style.css';
import '../../style.css';
import {Title,LineText,InfoCard} from '../../components';

const MicroBlading = () => {
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
            />

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
            />

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

          <div className='service-price-block flexible jBetween'>
            <p>Microblading / Schattierung</p>
            <p>300€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <div>
              <p style={{lineHeight:'25px'}}>Auffrischung,</p>
              <p>innerhalb der ersten 6 Monate</p>
            </div>
            <div className='flexible aEnd microblandingPrice'><p>90€</p></div>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Erstes Nachstechen</p>
            <p>150€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Korrektur/ Nacharbeit Fremdstudio</p>
            <p>200€</p>
          </div>
        </section>
      </section>
    </article>
  )
}
export default MicroBlading