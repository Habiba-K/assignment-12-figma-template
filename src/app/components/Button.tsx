import React from 'react'

const Button = (props:any) => {
  return (
    <div className=' w-full text-md font-normal'>
      <button className={`${props.btnColor} ${props.bgColor} ${props.mrl} ${props.pdy} ${props.pdx} rounded-lg`}>{props.btnText}</button>
    </div>
  )
}

export default Button
