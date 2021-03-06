import React from 'react';

import './style.css';
import '../../style.css';
import { LineText, InfoCard} from '../../components';

const LashesExtension = () => {
  return (
    <article className="LashesExtension">
        <div className='flexible jEnd wimperBlock'>
            <div className='sectionsTitleBlock'>
                <p className='sectionsGoldStyle '>
                    WIMPERNVERLÄNGERUNG
                </p>
                <p className='secondaryGrey'>Schöne und volle Wimpern, und das ganz ohne Wimperntusche? Eine
                    Wimpernverlängerung bei LaNush in München macht es möglich! Sparen Sie sich das
                    morgendliche Tuschen und begeistern Sie mit einem ausdrucksstarken Blick. Ihre
                    Wimpernverlängerung verleiht Ihren Augen mehr Weiblichkeit und ist selbst für Sportaktivitäten
                    , Saunagänge und Kontaktlinsenträger geeignet. Lassen Sie sich in
                    unserem Studio im Münchner Westend über die die 1:1sowie die Volumen Methode beraten!!</p>
            </div>
        </div>
      <section className="size">

        <div className="row flexible aStart jBetween">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Der besondere Augenaufschlag"
            width="47.5%"/>

          <InfoCard
            textData={["Aufregende Wimpern sind die besonderen Waffen einer Frau und gleichzeitig eine der tragenden Säulen weiblicher Schönheit. Machen Sie Ihren Traum von dichten, langen und schwungvollen Wimpern wahr oder gönnen Sie sich einen Lifting – Effekt für Ihre Augen – und das bis zu 4 – 6 Wochen! "]}
            bgColor="rgba(236,204,164,0.41)"/>
        </div>

        <div className="row flexible aStart jBetween">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Ablauf der Behandlung"
            width="47.5%"/>

          <InfoCard
            textData={["Wimper für Wimper werden Ihre neuen, künstlichen Extensions von unserem La ’ Nush Experten mit einem hautfreundlichen Spezialkleber an Ihre eigenen Wimpern befestigt. Die sehr elastischen und leichten künstlichen Wimpern können Sie individuell in verschiedenen Längen, Stärken und Biegungen wählen"]}
            bgColor="#f3efea"/>
        </div>

        <div className="row flexible aStart jBetween">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Haltbarkeit und Erneuerung"
            width="47.5%"/>

          <InfoCard
            textData={["Unsere Wimpern haben einen Wachstumszyklus von ca. 90 Tagen. Zusammen mit Ihren natürlichen Wimpern fallen auch Ihre Kunstwimpern aus. Daher ist es notwendig Ihre Wimpern regelmäßig aufzufüllen oder in Form zu bringen , Erfahrungsgemäß erfahrungsgemäß empfehlen wir die Wimpern alle drei bis vier Wochen nachzufüllen, damit ein unwiderstehlicher Augenaufschlag garantiert wird."]}
            bgColor="rgba(236,204,164,0.41)"/>
        </div>

        <div className="row flexible aStart jBetween">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Was ist vor der Behandlung zu beachten?"
            width="47.5%"/>

          <InfoCard
            textData={["Kommen Sie bitte zu Ihrem Termin mit gereinigten Wimpern ohne Mascara – oder Eyeliner – Reste, anderenfalls wird die Reinigungszeit von Ihrer eigentlichen Behandlungszeit abgezogen. "]}
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
            "Schützen Sie Ihre Wimpernextension 48 Stunden nach der Behandlung vor Feuchtigkeit und Nässe. ",
            "Von Saunagängen, Dampfbädern und direkter Sonne raten wir bis zu 48 Stunden nach der Behandlung ab, da sonst der Kleber nicht optimal aushärten kann.",
            "Um die Haltbarkeit Ihrer Wimpern lange zu gewährleisten, sollten Sie hohe Temperaturen meiden. Auch direkte und heiße Fönluft sollte vermieden werden.",
            "Auf Mascara sollten Sie weitgehend verzichten. Möchten Sie jedoch weiterhin Mascara verwenden achten Sie unbedingt auf wasserlösliche und ölfreie Produkte. Bitte nur die Spitzen der Wimpern tuschen. Vermeiden Sie starkes Reiben der Augen und Wimpern.",
            "Bitte keine Wimpernzange benutzen.",
            "Benutzen Sie zum Reinigen keine Abschminktücher oder Wattepads",
            "Bitte vermeiden Sie Kontakt mit fettigen Augencremes und/oder ölhaltigen Shampoos",
            "Meiden Sie salzhaltiges Wasser."
          ]}
            listStyle="disc"
            bgColor="rgba(236,204,164,0.41)"/>
        </div>

        <div className="miniSize">
          <LineText
            lineStyle="1px solid"
            headTitle="Wimpernverlängerung"
            textColor="#a6815b"
            width="100%"/>
          <div className='priceListParent flexible jBetween'>
              <div className='prceListLeftSide'>
               <div className='service-price-block flexible jBetween'>
                    <p>Neubesatz Einzeltechnik</p>
                    <p>129€</p>
                  </div>
                  <div className='service-price-block flexible jBetween'>
                    <div>
                    <p>Auffüllen</p>
                    <p>vor 3 Wochen 59 €</p>
                    <p>nach 4 Wochen 69 €</p>
                    <p>nach 6 Wochen Neupreis</p>
                    </div>
                    <p>129€</p>
                  </div>
                  <div  className='service-price-block flexible jBetween'>
                    <p>Wimpernentfernung</p>
                    <p>15€</p>
                  </div>
              </div>
              <div className='priceListRightSide'>
              <div className='service-price-block flexible jBetween'>
                    <p>Neubesatz 3D/ 4D Technik</p>
                    <p>149€</p>
                  </div>
                  <div className='service-price-block flexible jBetween'>
                    <div>
                    <p>Auffüllen</p>
                    <p>vor 3 Wochen 59 €</p>
                    <p>nach 4 Wochen 69 €</p>
                    <p>nach 6 Wochen Neupreis</p>
                    </div>
                    <p>129€</p>
                  </div>
              </div>
          </div>

        </div>

      </section>

    </article>
  )
}
export default LashesExtension