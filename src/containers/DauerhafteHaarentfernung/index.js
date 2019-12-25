import React from 'react';

import './style.css';
import '../../style.css';
import { LineText, InfoCard} from '../../components';

const DauerhafteHaarentfernung = () => {
  return (
    <article className="PermanentHairRemoval">
      <div className='flexible vertical aEnd'>
        <div className='sectionsTitleBlock '>
          <p className='sectionsGoldStyle'>
            DAUERHAFTE HAARENTFERNUNG
          </p>
          <p className='sectionsTitleSmallGold'>Der Weg zu glatter Haut</p>
          <p className='secondaryGrey'>
            Frauen und Männer schätzen in der heutigen Zeit eine schöne
            und haarfreie Haut. Sie ist ein Zeichen für Attraktivität und Ästhetik. Nie wieder Rasieren,
            Epilieren, Waxen oder eingewachsene Haare. Behandlung
            en mit modernsten Diodenlaser garantieren eine permanente Haarentfernung –
            sicher, schnell und dauerhaft.!
          </p>
        </div>
      </div>

      <section className="size">
        <div className="row flexible jBetween aStart">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Ablauf der Behandlung"
          />
          <InfoCard
            textData={["Aufgrund der unterschiedlichen Wachstumszyklen werden Behandlungen in einem Abstand von etwa vier bis sechs Wochen wiederholt.", "Nach einer persönlichen und ausführlichen Beratung beginnt die Behandlung mit der Kennzeichnung des Behandlungsbereichs. Unsere Expertin kennzeichnet mit einem Stift die Behandlungsgrenzen und trägt ein kühlendes Gel auf. Eine lokale Betäubung für die dauerhafte Haarentfernung ist durch die Verwendung von modernen Diodenlasern nicht erforderlich. ", "Nach den ersten Lichtimpulsen wird die Behandlungseinstellung des Diodenlasers auf Ihre speziellen Bedürfnisse eingestellt. Die Wärmewirkung des Laserlichtes sowie die Energiezufuhr beschädigt das Haarfollikel effektiv und verhindert ein Nachwachsen der Haare während das umliegende Gewebe geschont wird. Während der Sitzung spüren Sie in der Regel nur einen kurzen Stich und eine kurzzeitige Wärme."]}
            className="ablauf"
            bgColor="rgba(236,204,164,0.41)"/>
        </div>

        <div className="row flexible jBetween aStart">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Was ist vor der Behandlung zu beachten?"
            />
          <InfoCard
            textData={["Vermeiden Sie intensive Sonnenbäder oder Solarien, denn die dauerhafte Haarentfernung lässt sich bei sonnengebräunter Haut schlechter durchführen.",
            "Nehmen Sie vor der Behandlung ausreichend Flüssigkeit zu sich.",
            "Um das Ergebnis zu optimieren raten wir eine Woche vor der Behandlung ein Peeling zu machen, um überschüssige Hautschüppchen zu entfernen. So kann das Licht besser in die Haut eindringen. ",
            "Einen Tag vor Ihrer Behandlung rasieren Sie das zu behandelnde Areal. Zwischen den einzelnen Behandlungen sollten Sie nur oberflächig – z.B. per Rasur – enthaaren, um die Haarwurzeln nicht zu schädigen. ",
            "Entfernen Sie bitte vor der Behandlung Cremes und Make-up oder ähnliche Mittel von der zu behandelnden Stelle."]}
            listStyle="disc"
            bgColor="#f3efea"/>
        </div>

        <div className="row flexible jBetween aStart">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Was ist nach der Behandlung zu beachten?"
            />
          <InfoCard
            textData={["Meiden Sie in den ersten zwei Wochen nach der Behandlung auf intensive Sonnenbäder oder achten Sie darauf , dass die behandelten Stellen mit einem Sonnenschutzmittel (LSF 50+) geschützt sind. ",
            "Bitte epilieren Sie nicht die behandelten Zonen und cremen Sie sich täglich ein, um die Haut zart und geschmeidig zu halten. "]}
            listStyle="disc"
            bgColor="rgba(236,204,164,0.41)"/>
        </div>

        <div className='flexible jCenter'>
          <h2 className='preisliste-title'>Preisliste Damen</h2>
        </div>
        <div className='second-size '>
          <LineText
              headTitle='Kopf'
              lineStyle='1px solid'
              textColor='#a6815b'
          />
          <div className='service-price-block flexible jBetween'>
            <p>Gesicht (komplett)</p>
            <p>99€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p> Hals</p>
            <p>49€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p> Kinn</p>
            <p>39€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p> Oberlippe</p>
            <p>35€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p> Augenbrauen</p>
            <p>39€</p>
          </div>
        </div>


        <div className='second-size '>
          <LineText
              headTitle='Oberkörper'
              lineStyle='1px solid'
              width='100% !important'
              textColor='#a6815b'
          />
          <div className='service-price-block flexible jBetween'>
            <p>Steiß</p>
            <p>59€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Rücken</p>
            <p>89€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Schultern</p>
            <p>69€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Hände</p>
            <p>49€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Rücken (komplett)</p>
            <p>139€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Unterarme</p>
            <p>99€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Bauch</p>
            <p>89€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Brust (komplett)</p>
            <p>79€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Brustwarzen</p>
            <p>39€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Nacken</p>
            <p>45€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Oberarme</p>
            <p>99€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Achseln</p>
            <p>59€</p>
          </div>
        </div>

        <div className='second-size '>
          <LineText
              headTitle='Beine'
              lineStyle='1px solid'
              textColor='#a6815b'
          />
          <div className='service-price-block flexible jBetween'>
            <p>Oberschenkel</p>
            <p>159€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Hals</p>
            <p>49€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Unterschenkel</p>
            <p>129€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Füße</p>
            <p>39€</p>
          </div>
        </div>

        <div className='second-size '>
          <LineText
              headTitle='Intimzone'
              lineStyle='1px solid'
              width='100%'
              textColor='#a6815b'
          />
          <div className='service-price-block flexible jBetween'>
            <p>Pofalte</p>
            <p>49€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Intimzone</p>
            <p>49€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Gesäß (komplett)</p>
            <p>69€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Bikinizone</p>
            <p>59€</p>
          </div>
        </div>
        <div className='second-size '>
          <LineText
              headTitle='Sonstiges'
              lineStyle='1px solid'
              width='100%'
              textColor='#a6815b'
          />
          <div className='service-price-block flexible jBetween'>
            <p>Ganzkörper</p>
            <p>669€</p>
          </div>
          <div className='service-price-block flexible jBetween'>
            <p>Kleinstbereich</p>
            <p>49€</p>
          </div>
        </div>
      </section>

    </article>
  )
};
export default DauerhafteHaarentfernung