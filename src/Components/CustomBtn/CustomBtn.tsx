import React, { useState } from 'react'
import {useTranslation} from 'react-i18next'
import BtnArrowSvg from '../../svg/BtnArrowSvg'
import './style/style.css'

type Props = {
    btnText: string,
    color?: string
    onClick?: () => {}
}

const CustomBtn:React.FC<Props> = ({btnText, color, onClick}) => {
    const {t} = useTranslation()
    const [over,setOver]= useState(false);

    return (
        <div className='customBtn'>
            <div 
                className='customBtnContent' 
                onClick={onClick} 
                style={{background: color}}
                onMouseOver={()=>setOver(true)} 
                onMouseOut={()=>setOver(false)}
            >
                <p>{t(btnText)}</p>
            </div>
            <BtnArrowSvg color={color} className={over ? "active" : ''}/>
        </div>
    )
}

export default CustomBtn