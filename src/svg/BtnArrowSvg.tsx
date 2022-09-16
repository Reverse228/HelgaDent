import React from 'react'

type Props = {
    color?: string 
    className?: string
}

const BtnArrowSvg:React.FC<Props> = ({color, className}) => {
  return (
    <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2L13.5 2ZM10.9393 30.0607C11.5251 30.6464 12.4749 30.6464 13.0607 30.0607L22.6066 20.5147C23.1924 19.9289 23.1924 18.9792 22.6066 18.3934C22.0208 17.8076 21.0711 17.8076 20.4853 18.3934L12 26.8787L3.51472 18.3934C2.92893 17.8076 1.97918 17.8076 1.3934 18.3934C0.807611 18.9792 0.807611 19.9289 1.3934 20.5147L10.9393 30.0607ZM10.5 2L10.5 29L13.5 29L13.5 2L10.5 2Z" fill={color}/>
    </svg>
  )
}

export default BtnArrowSvg