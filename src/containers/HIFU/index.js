import React from 'react';

import './style.css';
import '../../style.css';
import { LineText, InfoCard} from '../../components';

const   HIFU = () => {
    return(
 <article className="HIFU">
     <div className='HIFUMargin'>
         <div className='flexible vertical aEnd'>
             <div className='sectionsTitleBlock '>
                 <p className='sectionsGoldStyle'>
                     HIFU
                 </p>
                 <p className='sectionsTitleSmallGold'>ist ein hochintensiver fokussierter Ultraschall</p>
                 <p className='secondaryGrey'>
                     HIFU ist ein hochintensiver fokussierter Ultraschall dass zur Haut- und Gesichtsstraffung sowie Faltenreduktion angewendet wird. Ein Lifting ohne den Einsatz von Nadeln, Skalpell oder Füllmaterialien.
                     Wenn Radiofrequenz, Needling & Co an ihre Grenzen stoßen, kann der hochintensive fokussierte Ultraschall (HIFU) für einen Liftingeffekt sorgen. Ohne die Epidermis zu schädigen, setzt die Behandlung unmittelbar in den tiefen Hautschichten bis hin zum SMAS an. Gezielt wird eine Straffung des Gesichts, Halses und Dekolletés provoziert. Problemzonen wie Hängewangen, erschlaffte Augenpartien oder ein Doppelkinn können damit behandelt werden.
                 </p>
                 <p className='sectionsTitleBlockSecondText secondaryGrey'>
                     Im Gegensatz zum Laser, dass von außen nach innen in die Haut eindringt, umgeht das HIFU die  Oberfläche der Haut. Es konzentriert sich ganz auf die tiefen Hautschichten, in denen Kollagen angereichert ist. Die HIFU Ultraschall-Technologie arbeitet von innen nach aussen und hilft der Haut nicht-invasiv zu straffen. Das Treatment empfiehlt sich für alle Kunden, die ein natürlich wirkendes Lifting erzielen möchten und dabei auf Ausfallzeiten verzichten möchten.
                 </p>
             </div>
         </div>
     </div>
     <div className='size'>
         <div className='row flexible jBetween aStart'>
             <LineText
                 headTitle='Was ist HIFU?'
                 lineStyle='1px solid #a6815b'
                 width='47.5%'
             >
             </LineText>
             <InfoCard
                 bgColor='rgba(236,204,164,0.41)'
                 textData={['Jede Haut ist anders – und so auch die Ergebnisse. Die Ergebnisse und die Anzahl ' +
                 'der nötigen Behandlungen hängen vom Zustand der Haut ab. Meist ist nach der ersten Behandlung bereits' +
                 ' ein spür- und sichtbarer Effekt möglich. Jedoch kann man einen deutlich sichtbaren Effekt nicht ' +
                 'garantieren. Der Regenerierungseffekt der Kollagenfasern dauert etwa 1 – 3 Jahre an. Danach wird ' +
                 'das Kollagen im Zuge des Alterungsprozesses wieder abgebaut. Die Behandlung sollte frühestens ' +
                 'nach 12 Monaten wiederholt werden.']}
             >

             </InfoCard>
         </div>
         <div className='row flexible jBetween aStart'>
             <LineText
                 headTitle='Was unterscheidet diese Art der Hautstraffung von anderen?'
                 lineStyle='1px solid #a6815b'
                 width='47.5%'
             >
             </LineText>
             <InfoCard
                 bgColor='rgba(236,204,164,0.41)'
                 textData={['Der hochfokussierte Ultraschall wirkt nicht nur in der Dermis sondern' +
                 ' auch unmittelbar auf die oberste Muskelschicht der Haut (SMAS = superficial' +
                 ' muscular aponeurotic system) um eine tiefgreifende Straffung des Gewebes zu ' +
                 'ermöglichen. Im Gegensatz zu operativen Eingriffen können Sie nach dieser ' +
                 'Behandlung direkt Ihren Tagesablauf wiederaufnehmen und behalten keine Schmerzen ' +
                 'oder Narben von der OP.']}
             >

             </InfoCard>
         </div>

         <div className='row flexible jBetween aStart'>
             <LineText
                 headTitle='Wie funktioniert die Behandlung?'
                 lineStyle='1px solid #a6815b'
                 width='47.5%'
             >
             </LineText>
             <InfoCard
                 bgColor='rgba(236,204,164,0.41)'
                 textData={['Im Gegensatz zur operativen Methode wird die Haut nicht gezogen sondern in sich ' +
                 'geschrumpft. Die Methode funktioniert ähnlich wie das Bündeln von Sonnestrahlen mithilfe einer ' +
                 'Lupe. Die Ultraschallwellen, die auf das Gesicht abgegeben werden, werden nacheinander auf 3 ' +
                 'verschiedenen Ebenen (in 1,5mm, 3mm und 4,5mm Tiefe) in der Haut gebündelt. Die Tiefe ist deshalb ' +
                 'so entscheidend, da die Haut, wenn sie nur oberflächlich gestrafft wird, maskenhaft erscheint. ' +
                 'Nur wenn das “Fundament” der Haut mitgestrafft wird, sieht die Haut tatsächlich um Jahre verjüngt' +
                 ' aus. An diesen Stellen entsteht eine Temperatur von ca. 65-70° C. Diese Temperatur ruft eine' +
                 ' leichte, von außen nicht erkennbare Schädigung in den Kollagenfasern hervor. Ein körpereigener ' +
                 'Heilungsprozess der Fasern tritt ein, der neue, straffe Fasern erzeugt (Entwicklungsdauer: einige ' +
                 'Wochen bis Monate) und so die Haut von innen strafft. Zudem ziehen sich die Kollagenfasern' +
                 ' unmittelbar nach der Behandlung zusammen. Dies führt zu einem sofortigen Straffungseffekt.']}
             >

             </InfoCard>
         </div>

         <div className='row flexible jBetween aStart'>
             <LineText
                 headTitle='Nebenwirkungen'
                 lineStyle='1px solid #a6815b'
                 width='47.5%'
             >
             </LineText>
             <InfoCard
                 bgColor='rgba(236,204,164,0.41)'
                 textData={['Kein kosmetischer Eingriff ist völlig frei von Risiken. Zu den häufigsten ' +
                 'Nebenwirkungen gehören stärkere Rötungen, die meist nach Stunden oder spätestens nach Tagen wieder' +
                 ' verblassen. Bei Behandlung mit sehr hoher Energie kann es zu dem zu Hämatomen und blauen Flecken' +
                 ' kommen, die meist etwa nach 1 Woche abklingen. Druckempfindlichkeit und ein leichtes Prickeln,' +
                 ' die durch den Heilungsprozess des Unterhautgewebes verursacht werden, können auch mehrere Wochen' +
                 ' anhalten. Gelegentlich kann ein vorübergehendes Taubheitsgefühl auftreten, welches nach Tagen' +
                 ' oder Wochen nachlässt. Es besteht die geringe Gefahr einer Verbrennung, die evtl zu einer' +
                 ' Narbenbildung führt. Es besteht die geringe Gefahr einer thermisch verursachten Nervenentzündung,' +
                 ' die binnen einiger Tage bis Wochen nachlässt. In seltenen Fällen kann es zur Bildung von ' +
                 'streifenartigen, leicht erhobenen Quaddeln führen, die sich nach einigen Tagen oder Wochen wieder ' +
                 'zurückbilden. Sollte es zu länger anhaltenden Beschwerden kommen informieren Sie uns bitte ' +
                 'umgehend und suchen Sie einen Arzt auf. Nach der Behandlung kann jedoch im Regelfall (je nach ' +
                 'Intensität und Körperbereich) der normale Tagesablauf wieder aufgenommen werden.']}
             >

             </InfoCard>
         </div>


         <div className='row flexible jBetween aStart'>
             <LineText
                 headTitle='Anwendungsdauer'
                 lineStyle='1px solid #a6815b'
                 width='47.5%'
             >
             </LineText>
             <InfoCard
                 bgColor='rgba(236,204,164,0.41)'
                 textData={['Je nach Bereich dauert eine Behandlung nur ' +
                 'wenige Minuten (z.B. 15 Min. bei Augenbrauenlifting) bis zu 2 Stunden ' +
                 '(Oberschenkelstraffung).']}
             >
             </InfoCard>
         </div>


         <div className='row flexible jBetween aStart'>
             <LineText
                 headTitle='Ergebnisse'
                 lineStyle='1px solid #a6815b'
                 width='47.5%'
             >
             </LineText>
             <InfoCard
                 bgColor='rgba(236,204,164,0.41)'
                 textData={['Jede Haut ist anders – und so auch die Ergebnisse. Die Ergebnisse und die Anzahl der ' +
                 'nötigen Behandlungen hängen vom Zustand der Haut ab. Meist ist nach der ersten Behandlung bereits ' +
                 'ein spür- und sichtbarer Effekt möglich. Jedoch kann man einen deutlich sichtbaren Effekt nicht ' +
                 'garantieren. Der Regenerierungseffekt der Kollagenfasern dauert etwa 1 – 3 Jahre an. Danach wird' +
                 ' das Kollagen im Zuge des Alterungsprozesses wieder abgebaut. Die Behandlung sollte frühestens' +
                 ' nach 12 Monaten wiederholt werden.']}
             >

             </InfoCard>
         </div>


         <div className='row flexible jBetween aStart'>
             <LineText
                 headTitle='Gegenanzeigen'
                 lineStyle='1px solid #a6815b'
                 width='47.5%'
             >
             </LineText>
             <InfoCard
                 bgColor='rgba(236,204,164,0.41)'
                 textData={['Folgende Personengruppen / Zonen dürfen nicht behandelt werden :',

                     '– Personen mit Blutungsneigung' ,
                     " – Personen, die mit Chemotherapie behandelt werden",
                     "– Schwangere (auch in der Stillzeit nicht zu empfehlen)",

                     "– UV-geschädigte und dünne Haut (ungenügendes Unterhaut-Fettgewebe)",

                     "– offene Wunden, Hautverletzungen, erhabene keloide Narben, Schwangerschaft",

                     "– Implantate wie Herzschrittmacher, Unterspritzungen, Brustimplantate (im Behandlungsareal)",

                     " – Jugendliche unter 18 Jahren"]}
             >

             </InfoCard>
         </div>
     </div>
     <div className='second-size '>
      <LineText
          headTitle='Preise'
          lineStyle='1px solid'
          width='100%'
          textColor='#a6815b'
      />
      <LineText flexName='flexible jBetween aCenter'
                textTitleLeft={['Gesicht  komplett','1109€']}
                lineStyle='1px dashed'/>
      <LineText flexName='flexible jBetween aCenter'
                textTitleLeft={['Gesicht  komplett inkl. Hals','1299€']}
                lineStyle='1px dashed'/>
      <LineText flexName='flexible jBetween aCenter'
                textTitleLeft={['Gesicht  komplett inkl. Hals & Dekolleté ', '1499€']}
                lineStyle='1px dashed'/>
      <LineText flexName='flexible jBetween aCenter'
                textTitleLeft={['Doppelkinn']}
                textTitleRight='ab 199€'
                lineStyle='1px dashed'/>
      <LineText flexName='flexible jBetween aCenter'
                textTitleLeft={['Hals']}
                textTitleRight='ab 399€'
                lineStyle='1px dashed'/>
      <LineText flexName='flexible jBetween aCenter'
                 textTitleLeft={['Nasolabialfalte','199€']}
                 lineStyle='1px dashed'/>
      <LineText flexName='flexible jBetween aCenter'
                 textTitleLeft={['Oberlippenbereich (Ziehharmonikafalten)','199€']}
                 lineStyle='1px dashed'/>
      <LineText flexName='flexible jBetween aCenter'
                textTitleLeft={['Zornesfalte']}
                textTitleRiht='149€'
                lineStyle='1px dashed'/>
      <LineText flexName='flexible jBetween aCenter'
                textTitleLeft={['Doppelkinn inkl. Hals','499€']}
                lineStyle='1px dashed'/>
      <LineText flexName='flexible jBetween aCenter'
                textTitleLeft={['Wangen']}
                textTitleRight='ab 249€'
                lineStyle='1px dashed'/>
         <LineText flexName='flexible jBetween aCenter'
                   textTitleLeft={['Stirn inkl. Zornesfalte','399€']}
                   lineStyle='1px dashed'/>
         <LineText flexName='flexible jBetween aCenter'
                   textTitleLeft={['Stirn inkl. Augenbrauenbereich', '399€']}
                   lineStyle='1px dashed'/>
         <LineText flexName='flexible jBetween aCenter'
                   textTitleLeft={['Mundbereich inkl. Wangen', '589€']}
                   textTitleRiht='ab 249€'
                   lineStyle='1px dashed'/>

         <LineText flexName='flexible jBetween aCenter'
                   textTitleLeft={['Mundbereich inkl. Wangen inkl. Doppelkinn und Hals ', ' 799€']}
                   lineStyle='1px dashed'/>
         <LineText flexName='flexible jBetween aCenter'
                   textTitleLeft={['Dekolleté']}
                   textTitleRight='ab 499€'
                   lineStyle='1px dashed'/>
         <LineText flexName='flexible jBetween aCenter'
                   textTitleLeft={['Hals inkl. Dekolleté', ' 699€']}
                   lineStyle='1px dashed'/>
     </div>
 </article>
    )
};
export default HIFU
