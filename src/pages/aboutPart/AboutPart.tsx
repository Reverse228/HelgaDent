import React, {useRef} from 'react'
import { useTranslation } from 'react-i18next';
import "./style/style.css"
import Mouth from "./imgs/mouth.png"
import useWindowDimensions from '../../hooks/useWindowDimensions';
import CustomBtn from '../../Components/CustomBtn/CustomBtn';

type Props = {
    refEl: React.RefObject<HTMLDivElement>
}

const AboutPart: React.FC<Props> = ({refEl}) => {
    const { height } = useWindowDimensions();
    const {t} = useTranslation();

    const contentRef = useRef<HTMLDivElement>(null)

    const imgBgStyles = {
        width: contentRef.current?.offsetWidth,
        height: contentRef.current?.offsetHeight,
        x: contentRef.current?.offsetLeft,
        y: contentRef.current?.offsetTop
    }

    return (
        <div id='aboutPart' style={{height: height -100}} ref={refEl}>
            <h2>{t("content.aboutPart.name")}</h2>
            <div id='aboutPartContent' ref={contentRef}>
                <p id='info'>{t("content.aboutPart.info")}</p>
                <div id='imgs' style={{
                    width: imgBgStyles.width,
                    height: imgBgStyles.height,
                    left: imgBgStyles.x,
                    top: imgBgStyles.y
                }}>
                    <img src={Mouth} alt="mouth" />
                </div>
            </div>
            <CustomBtn btnText='btnText.aboutPart' color={"#F45556"}/>
        </div>
    )
}

export default AboutPart