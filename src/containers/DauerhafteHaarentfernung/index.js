import React from 'react';

import './style.css';
import '../../style.css';
import {Title, LineText, InfoCard} from '../../components';

const DauerhafteHaarentfernung = () => {
  return (
    <article className="PermanentHairRemoval">
      <div className="PermanentHairRemoval_title">
        <Title
          title1="DAUERHAFTE HAARENTFERNUNG"
          title2="Der Weg zu glatter Haut"
          desc1="Frauen und Männer schätzen in der heutigen Zeit eine schöne und haarfreie Haut. Sie ist ein Zeichen für Attraktivität und Ästhetik. Nie wieder Rasieren, Epilieren, Waxen oder eingewachsene Haare. Behandlungen mit modernsten Diodenlaser garantieren eine permanente Haarentfernung – sicher, schnell und dauerhaft."
          className="Permanent"
          width="811px"
          flexName="flexible jEnd aCenter"/>
      </div>

      <section className="size">
        <div className="row flexible jBetween aStart">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Ablauf der Behandlung"
            width="47.5%"/>
          <InfoCard
            textData={["Aufgrund der unterschiedlichen Wachstumszyklen werden Behandlungen in einem Abstand von etwa vier bis sechs Wochen wiederholt.", "Nach einer persönlichen und ausführlichen Beratung beginnt die Behandlung mit der Kennzeichnung des Behandlungsbereichs. Unsere Expertin kennzeichnet mit einem Stift die Behandlungsgrenzen und trägt ein kühlendes Gel auf. Eine lokale Betäubung für die dauerhafte Haarentfernung ist durch die Verwendung von modernen Diodenlasern nicht erforderlich. ", "Nach den ersten Lichtimpulsen wird die Behandlungseinstellung des Diodenlasers auf Ihre speziellen Bedürfnisse eingestellt. Die Wärmewirkung des Laserlichtes sowie die Energiezufuhr beschädigt das Haarfollikel effektiv und verhindert ein Nachwachsen der Haare während das umliegende Gewebe geschont wird. Während der Sitzung spüren Sie in der Regel nur einen kurzen Stich und eine kurzzeitige Wärme."]}
            className="ablauf"
            bgColor="rgba(236,204,164,0.41)"/>
        </div>

        <div className="row flexible jBetween aStart">
          <LineText
            lineStyle="1px solid rgb(166, 129, 91)"
            headTitle="Was ist vor der Behandlung zu beachten?"
            width="47.5%"/>
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
            width="47.5%"/>
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
              width='100%'
              textColor='#a6815b'
          />
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Gesicht (komplett)']}
                    textTitleRight='99€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Hals']}
                    textTitleRight='49€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Kinn']}
                    textTitleRight='39€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Oberlippe']}
                    textTitleRight='35€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Augenbrauen']}
                    textTitleRight='39€'
                    lineStyle='1px dashed'/>
        </div>


        <div className='second-size '>
          <LineText
              headTitle='Oberkörper'
              lineStyle='1px solid'
              width='100%'
              textColor='#a6815b'
          />
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Steiß']}
                    textTitleRight='59€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Rücken']}
                    textTitleRight='89€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Schultern']}
                    textTitleRight='69€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Hände']}
                    textTitleRight='49€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Rücken (komplett)']}
                    textTitleRight='139€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Unterarme']}
                    textTitleRight='99€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Bauch']}
                    textTitleRight='89€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Brust (komplett)']}
                    textTitleRight='79€'
                    lineStyle='1px dashed'/>

          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Brustwarzen']}
                    textTitleRight='39€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Medianlinie']}
                    textTitleRight='39€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Nacken']}
                    textTitleRight='45€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Oberarme']}
                    textTitleRight='99€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Achseln']}
                    textTitleRight='59€'
                    lineStyle='1px dashed'/>

        </div>

        <div className='second-size '>
          <LineText
              headTitle='Beine'
              lineStyle='1px solid'
              width='100%'
              textColor='#a6815b'
          />
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Oberschenkel']}
                    textTitleRight='159€'
                    lineStyle='1px dashed'/>

          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Hals']}
                    textTitleRight='49€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Unterschenkel']}
                    textTitleRight='129€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Füße']}
                    textTitleRight='39€'
                    lineStyle='1px dashed'/>
        </div>

        <div className='second-size '>
          <LineText
              headTitle='Intimzone'
              lineStyle='1px solid'
              width='100%'
              textColor='#a6815b'
          />
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Pofalte']}
                    textTitleRight='49€'
                    lineStyle='1px dashed'/>

          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Intimzone']}
                    textTitleRight='49€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Gesäß (komplett)']}
                    textTitleRight='69€'
                    lineStyle='1px dashed'/>
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Bikinizone']}
                    textTitleRight='59€'
                    lineStyle='1px dashed'/>
        </div>
        <div className='second-size '>
          <LineText
              headTitle='Sonstiges'
              lineStyle='1px solid'
              width='100%'
              textColor='#a6815b'
          />
          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Ganzkörper']}
                    textTitleRight='669€'
                    lineStyle='1px dashed'/>

          <LineText flexName='flexible jBetween aCenter'
                    textTitleLeft={['Kleinstbereich']}
                    textTitleRight='49€'
                    lineStyle='1px dashed'/>
        </div>
      </section>

    </article>
  )
}
export default DauerhafteHaarentfernung