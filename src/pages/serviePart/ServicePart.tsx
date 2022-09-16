import React, {useState, useRef} from 'react'
import { useTranslation } from 'react-i18next'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import ServiceBtn from './components/serviceBtn/ServiceBtn'
import { servicBtns, servicePrice } from './config'
import "./style/style.css"
import Mouth1 from "./imgs/mouth1.png"
import Mouth2 from "./imgs/mouth2.png"
import Girl from "./imgs/girl.png"
import CustomBtn from '../../Components/CustomBtn/CustomBtn'

type Props = {
    refEl: React.RefObject<HTMLDivElement>
}

const ServicePart: React.FC<Props> = ({refEl}) => {
    const {t} = useTranslation()
    const {height} = useWindowDimensions()
    const [activeBtn, setActiveBtn] = useState<number>(0)

    const contentRef = useRef<HTMLDivElement>(null)

    const imgBgStyles = {
        width: contentRef.current?.offsetWidth,
        height: contentRef.current?.offsetHeight,
        x: contentRef.current?.offsetLeft,
        y: contentRef.current?.offsetTop
    }

    return (
        <div id='servicePart' style={{height: height - 100}} ref={refEl}>
            <div id='btns'>
                {servicBtns.map((item, idx: number) => {
                    return <ServiceBtn 
                    btnText={`content.servicePart.btns.btn${idx+1}`} 
                    children={<item.ico/>} 
                    onClick={() => {
                        setActiveBtn(idx)
                    }}
                    className={activeBtn === idx ? 'serviceBtnAc' : ''}
                    key={idx}/>
                })}
            </div>
            <div id='servicePartContent'>
                <div id='description'>
                    <h3>{t(`content.servicePart.btns.btn${activeBtn+1}`)}</h3>
                    <p>{t(`content.servicePart.description.desc${activeBtn+1}`)}</p>
                </div>
                <div id='servicePartPrice' ref={contentRef}>
                    <div id='servicePriceLineContainer'>
                        {servicePrice.map((item, idx)=> {
                            return <div className='servicePriceLine' key={idx}>
                                {item.serviceId ===( activeBtn + 1) && <div className='line'>
                                        <p className='name'>{t(item.name)}</p>
                                        <p className='price'>{item.price}</p>
                                    </div>}
                            </div>
                        })}
                    </div>
                    <div id='imgs' style={{
                        width: imgBgStyles.width,
                        height: imgBgStyles.height,
                        left: imgBgStyles.x,
                        top: imgBgStyles.y
                    }}>
                        <img src={Mouth1} alt="mouth1" />
                        <img src={Mouth2} alt="mouth2" />
                        <img src={Girl}  alt="girl" />
                    </div>
                </div>
            </div>
            <CustomBtn btnText={'btnText.aboutMedics'} color={"#05A1AD"}/>
        </div>
    )
}

export default ServicePart