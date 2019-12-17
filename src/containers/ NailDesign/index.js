import React from 'react';
import './style.css';
import '../../style.css';
import {InfoCard, LineText, Title} from '../../components';
const NailDesign = () => {
    return(
        <div className="NailDesign">
          <div className='flexible jEnd titleContent'>
              <Title
                  title1="NAGELDESIGN"
                  desc1="Das Zauberwort für ein perfektes Finish topgepflegter Nägel ist eine Shellack oder Gel Maniküre. Genießen Sie perfektes Nageldesign, absolute Kratzfestigkeit und einen makellosen Glanz – und das bis zu vier Wochen lang!"
                  desc2="Gerne modellieren wir auch vereinzelte Nägel und beraten Sie bei der Farbauswahl."
                  width="588px"
                  flexNmae="flexible jEnd aCenter"
              />
          </div>
            <div className="row flexible aStart jBetween">
                <LineText
                    lineStyle="1px solid rgb(166, 129, 91)"
                    headTitle="SHELLAC"
                    width="47.5%"/>

                <InfoCard
                    textData={['Wer nach einem kratzfesten, langanhaltenden dabei aber natürlichen Lack für seine' +
                    ' Nägel sucht ist mit unserer Shellack Auswahl vom weltweiten Hersteller von Shellack CND ' +
                    'bestens beraten. Ob feminines rot oder klassische French Nails – bei der Shellack Methode ' +
                    'sind nahezu keine Grenzen gesetzt. Zudem regenerieren brüchige oder beschädigte Nägel durch ' +
                    'den schonenden Lack, verstärken diese und garantierten ein kratzfestes Farberlebnis bis zu ' +
                    '4 Wochen lang.']}
                    bgColor="rgba(236,204,164,0.41)"
                />
            </div>
            <div className='shelackPrices'>
                <LineText
                    lineStyle="1px solid"
                    headTitle="SHELLAC"
                    textColor=' rgb(166, 129, 91)'
                    flexName='flexible grow '
                    />
                <LineText
                    lineStyle="1px dashed"
                    textTitleLeft={["Shellac mit Maniküre"]}
                    textTitleRight="39€"
                    flexName="flexible jBetween aCenter"
                    width="100%"/>
                <LineText
                    lineStyle="1px dashed"
                    textTitleLeft={["Entfernung von Shellac von Fremdstudios"]}
                    textTitleRight="15€"
                    flexName="flexible jBetween aCenter"
                    width="100%"/>
                    <p style={{padding: '5px 0'}}>Klassische Maniküre ab</p>
                    <p style={{padding: '5px 0'}}>Dieser Service enthält:</p>
               <div className='infoCardParent'>
                   <InfoCard
                       textData={['Nägel feilen, kurzen und formen','Nagelhaut zurückschieben und formen','Nägel polieren',
                           'Abschlußpflege Nagelöl','bschlußpflege Handcreme'
                       ]}
                       className='infoPadding'
                       listStyle='disc'
                   />
                   <div className='flexible jEnd'>
                       <p>15€</p>
                   </div>
               </div>
                <div className='infoCardParent'>
                    <p style={{padding: '5px 0'}}>Klassische Maniküre für Männer ab</p>
                    <p style={{padding: '5px 0'}}>Dieser Service enthält:</p>
                    <InfoCard
                        textData={['Nägel feilen, kurzen und formen','Nagelhaut zurückschieben und formen','Nägel polieren',
                            'Abschlußpflege Nagelöl ','Abschlußpflege Handcreme'
                        ]}
                        className='infoPadding'
                        listStyle='disc'
                    />
                    <div className='flexible jEnd'>
                        <p>15€</p>
                    </div>
                </div>
            </div>
            <div className="row flexible aStart jBetween">
                <LineText
                    lineStyle="1px solid rgb(166, 129, 91)"
                    headTitle="GELNÄGEL / Nagelmodellage"
                    width="47.5%"/>

                <InfoCard
                    textData={['Die Nagelmodellage ist die künstliche Verlängerung und Verstärkung des \n' +
                    'eigenen Fingernagels mit Hilfe von Gel. Zuerst werden dem Kunden die Hände und Nägel\n' +
                    'desinfiniert. Die Nägel werden dann entfettet, die Nagelhaut wie bei einer Maniküre\n' +
                    'zurückgeschoben und mit einem Buffer, Dehydrator und einem zusätzlichen Haftvermittler' +
                    ' für die Modellage vorbereitet.\n' +
                    'Bei der Verwendung von Nagelspitzen werden diese mit Nagelkleber angeklebt, \n' +
                    'auf die gewünschte Länge gekürzt und geformt. Um die Festigkeit zu erhöhen und \n' +
                    'eine glatte, lackierbare Oberfläche zu bekommen, wird der eigene Nagel und die Nagelspitz\n' +
                    'e mit Modellagekunststoff (Gel) überzogen. Nach der Aushärtung wird die Oberfläche per \n' +
                    'Handfeile oder Fräser in Form gefeilt sowie geglättet. Zum Abschluss erfolgt die Polierung \n' +
                    'der Nägel oder ein UV-härtende Versiegelung wird aufgebracht. Selbstverständlich beraten\n' +
                    'wir auch hier Sie bei der Auswahl der passenden Farbe']}
                    bgColor="rgba(236,204,164,0.41)"
                />
            </div>
            <div className='shelackPrices'>
                <LineText
                    lineStyle="1px solid"
                    textColor='rgb(166, 129, 91)"'
                    headTitle="GELNÄGEL / Nagelmodellage"
                    />
                <LineText
                    lineStyle="1px dashed #AF7E48"
                    textColor='rgb(166, 129, 91)"'
                    textTitleLeft={['Gel auffüllen']}
                    textTitleRight='49€'
                    flexName='flexible jBetween aCenter'
                />
                <LineText
                    lineStyle="1px dashed #AF7E48"
                    textColor='rgb(166, 129, 91)"'
                    textTitleLeft={['Nagelverlängerung']}
                    textTitleRight='59€'
                    flexName='flexible jBetween aCenter'
                />
                <LineText
                    lineStyle="1px dashed #AF7E48"
                    textColor='rgb(166, 129, 91)"'
                    textTitleLeft={['Reparatur pro Nagel ab ']}
                    textTitleRight='3€'
                    flexName='flexible jBetween aCenter'
                />
                <LineText
                    lineStyle="1px dashed #AF7E48"
                    textColor='rgb(166, 129, 91)"'
                    textTitleLeft={['Design pro Nagel ab']}
                    textTitleRight='2€'
                    flexName='flexible jBetween aCenter'
                />

            </div>
        </div>
    )
}
export default NailDesign;