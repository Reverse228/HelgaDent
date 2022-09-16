import React from 'react'
import { useTranslation } from 'react-i18next'
import "./style/style.css"

type Props = {
    btnText: string,
    children: any,
    className: string,
    onClick: any
}

const ServiceBtn: React.FC<Props> = ({btnText, children, className, onClick}) => {
    const {t} = useTranslation()
  return (
    <div className={`serviceBtn ${className}`} onClick={onClick}>
        <p>{t(btnText)}</p>
        {children}
    </div>
  )
}

export default ServiceBtn