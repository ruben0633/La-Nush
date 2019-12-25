import React from 'react';

import './style.css';
import '../../style.css';
import { slide2 } from '../../assets/HomePage';
import { Image, LineText, InfoCard} from '../../components';

const Wimpernwelle = () => {
    return(
        <div className="Wimpernwelle">
            <div className='wimpMargin'>
                <div className='flexible vertical '>
                    <div className='sectionsTitleBlock '>
                        <p className='sectionsGoldStyle'>
                            WIMPERNLIFTING
                        </p>
                        <p>
                            Die Träume von einem schwungvollen und strahlenden Augenaufschlag mit
                            schönen geformten Wimpern? Dann gönnen Sie sich Ihre Naturwimpern mit u
                            nserem professionellen Wimpernlifting einen Lifting-Effekt! Verabschieden
                            Sie sich von I
                            hrer Wimpernzange und profitieren Sie bis zu 6 Wochen von mehr Form und
                            einem wunderschönen Ausdruck!

                        </p>
                        <p className='sectionsTitleBlockSecondText'>Bei der Wimpernlifting werden Ihre eigenen Wimpernhäarchen mittels eines Power Pad je nach
                            Wünsch stärker oder leichter angehoben bzw. an der Wimpernlänge angepasst.</p>
                    </div>
                </div>
            </div>
            <div className='imageContent flexible jCenter'>
                <Image src={slide2} width='100%' height='250px' />
            </div>
            <div className='wimpernTextBlock'>
                <div className="row flexible aStart jBetween">
                    <LineText
                        lineStyle="1px solid rgb(166, 129, 91)"
                        headTitle="Was ist zu beachten?"
                        />

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
                <div className='wimpernlifting flexible vertical aCenter'>
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