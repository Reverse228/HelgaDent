import React, { useState } from 'react'
import { IMenuBtn } from '../../interfaces/IMenuBtn'
import { MenuBtns } from './Config'
import LanguaceBtn from './languaceBtn/LanguaceBtn'
import {useTranslation} from 'react-i18next'
import "./style/style.css"

type Props = {
    onClick: any
}

const Menu:React.FC<Props> = ({onClick}) => {
    const { t } = useTranslation()
    const [activeBtn, setActiveBtn] = useState<null | number>(null)

    const menuBtnClick = (idx: number) => {
        setActiveBtn(idx)
    }

    return <div id='menu'>
        <div id='fakeMenu'/>
        <div id='realMenu'>
            <h1 onClick={() => {
                setActiveBtn(null) 
                onClick(0)
            }}>HELGA DENT</h1>
            <div id='menuContent'>
                {MenuBtns.map((item: IMenuBtn, idx) => {
                    return <span 
                    className={idx === activeBtn ? `menuBtn acMenuBtn` : "menuBtn"}
                    key={idx}
                    onClick={() => {
                        menuBtnClick(idx)        
                        onClick(idx + 1)
                    }}
                    >
                        {t(`menu.btn${idx+1}`)}
                    </span>
                })}
                <LanguaceBtn/>
            </div>
        </div>
    </div>
}

export default Menu

