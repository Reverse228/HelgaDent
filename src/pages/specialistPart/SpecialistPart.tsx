import React, {useRef} from 'react'
import { useTranslation } from 'react-i18next';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './style/style.css'
import Medic from "./imgs/Medic.png"
import Instrumenst from "./imgs/Instrumenst.png"

type Props = {
    refEl: React.RefObject<HTMLDivElement>
}

const SpecialistPart: React.FC<Props> = ({refEl})=> {
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
        <div id='specialistPart' style={{height: height -100}} ref={refEl}>
            <h2>{t("content.specialistPart.name")}</h2>
            <div id='aboutPartContent' ref={contentRef}>
                <p id='info'>{t("content.specialistPart.info")}</p>
                <div id='imgs' style={{
                    width: imgBgStyles.width,
                    height: imgBgStyles.height,
                    left: imgBgStyles.x,
                    top: imgBgStyles.y
                }}>
                    <img src={Medic} alt="Medic" />
                    <img src={Instrumenst} alt="Instrumenst"/>
                </div>
            </div>
        </div>
    )
}

export default SpecialistPart