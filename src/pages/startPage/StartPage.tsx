import React, { useRef } from 'react'
import {useTranslation} from 'react-i18next'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import "./style/style.css"
import Mouth from "./img/mouth.png"
import Intruments1 from "./img/instruments1.png"
import Intruments2 from "./img/instruments2.png"
import CustomBtn from '../../Components/CustomBtn/CustomBtn'

type Props = {
    refEl: any
}

const StartPage: React.FC<Props> = ({refEl}) => {
    const {t} = useTranslation()
    const { height } = useWindowDimensions();

    const contentRef = useRef<HTMLDivElement>(null)

    const imgBgStyles = {
        width: contentRef.current?.offsetWidth,
        height: contentRef.current?.offsetHeight,
        x: contentRef.current?.offsetLeft,
        y: contentRef.current?.offsetTop
    }

    return (
        <div id='startPage' style={{height: height - 100}} ref={refEl}>
            <div id='startPageContent' ref={contentRef}>
                <div id='content' >
                    <h2>{t("content.startPage.bigText")}</h2>
                    <CustomBtn btnText={"btnText.homePage"} color={"#05A1AD"}/>
                </div>
                <div id='imgs' style={{
                    width: imgBgStyles.width,
                    height: imgBgStyles.height,
                    left: imgBgStyles.x,
                    top: imgBgStyles.y
                }}>
                    <img src={Mouth} alt="mouth" />
                    <img src={Intruments2} alt="" />
                    <img src={Intruments1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default StartPage