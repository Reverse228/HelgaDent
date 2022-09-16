import React, { useEffect, useState } from 'react'
import i18n from '../../../i18n'
import LanguaceSvg from '../../../svg/LanguaceSvg'
import "./style/style.css"

const LanguaceBtn = () => {
    const [lbAc, setLbAc] = useState(false)

    const [languageChange, setLanguageChange] = React.useState(i18n.language === "ru" ? true : false)

    useEffect(() => {  
        setLanguageChange(i18n.language === "ru" ? true : false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.language])    

    const setLangBtn = () => {
        setLbAc(!lbAc)
    }

    const setLangI18 = (lang: string) => {
        i18n.changeLanguage(lang)
        setLangBtn()
    }

    return (
        <div id="languaceBtnCont" >
            <div id="languaceBtn" onClick={setLangBtn}>
                <LanguaceSvg/>
            </div>
            {lbAc && <div id='languaceBtns'>
                <p 
                    onClick={() => {setLangI18("ru")}} 
                    style={{color: !languageChange ? "white" : "#03676F"}}
                >RU</p>
                <p 
                    onClick={() => {setLangI18("ro")}}
                    style={{color: languageChange ? "white" : "#03676F"}}
                >RO</p>
            </div>}
        </div>
    )
}

export default LanguaceBtn