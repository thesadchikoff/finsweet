import React from 'react'

const Button = ({textColor, bgColor, hoverBgColor, label, func, className}) => {
  return (
    <button onClick={func} className={`${className} text-left px-[48px] py-[16px] ${bgColor} w-max text-[${textColor}] text-bold text-[18px] hover:${hoverBgColor} transition-all hover:delay-75`}>{label}</button>
  )
}

export default Button