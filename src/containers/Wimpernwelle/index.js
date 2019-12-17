import React from 'react';

import './style.css';
import '../../style.css';
import { slide2 } from '../../assets/HomePage';
import {Title, Image, LineText, InfoCard} from '../../components';

const Wimpernwelle = () => {
    return(
        <div className="Wimpernwelle">
            <Title
            title1="WIMPERNLIFTING"
            desc1="Die Träume von einem schwungvollen und strahlenden Augenaufschlag mit schönen geformten Wimpern? Dann gönnen Sie sich Ihre Naturwimpern mit unserem professionellen Wimpernlifting einen Lifting-Effekt! Verabschieden Sie sich von Ihrer Wimpernzange und profitieren Sie bis zu 6 Wochen von mehr Form und einem wunderschönen Ausdruck!"
            desc2="Bei der Wimpernlifting werden Ihre eigenen Wimpernhäarchen mittels eines Power Pad je nach Wünsch stärker oder leichter angehoben bzw. an der Wimpernlänge angepasst."
            width="60%"
            className="wimpernLifting"
            />
            <div className='imageContent flexible jCenter'>
                <Image src={slide2} width='300px' height='250px' />
            </div>
            <div className='wimpernTextBlock'>
                <div className="row flexible aStart jBetween">
                    <LineText
                        lineStyle="1px solid rgb(166, 129, 91)"
                        headTitle="Was ist zu beachten?"
                        width="47.5%"/>

                    <InfoCard
                        textData={['Kommen Sie bitte zu Ihrem Termin mit gereinigten Wimpern ohne Mascara- oder Eyelinerreste, anderenfalls wird die Reinigungszeit von Ihrer eigentlichen Behandlungszeit abgezogen.']}
                        bgColor="rgba(236,204,164,0.41)"
                        listStyle="disc"/>
                </div>
                <p className='wimpernText'>
                        Machen Sie Ihren Traum von dichten und langen Wimpern wahr! Von natürlich
                    bis schwungvoll: unsere Wimpernlifting verleiht Ihren Augen dauerhaft mehr Ausdruck
                    und unterstützt Ihre weibliche Schönheit. Sie sparen sich wie bei der Wimpernverlängerung
                    die Zeit zum Formen und Tuschen.
                </p>
            </div>
            <div className='wimpernlifting'>
                <LineText
                    lineStyle="1px solid "
                    headTitle="Wimpernlifting"
                    textColor='rgb(166, 129, 91)'
               />
                <LineText
                    flexName=' flexible jBetween aCenter'
                    lineStyle="1px dashed rgb(166, 129, 91)"
                    textTitleLeft={['Wimpernlifting 50 Min']}
                    textTitleRight='59 €'
                />
                <LineText
                    flexName=' flexible jBetween aCenter'
                    lineStyle="1px dashed rgb(166, 129, 91)"
                    textTitleLeft={['mit Laminierung']}
                    textTitleRight='69 €'
                />
            </div>
        </div>
    )
}
export default Wimpernwelle