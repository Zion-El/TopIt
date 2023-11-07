import React from 'react'


interface props {
    text :string
    size :string
    color : string
    weight? : string
    family :  string
    px? : string
    py? : string
}

function Text( 
    {
        text, 
        size , 
        color , 
        weight, 
        family, 
        px , 
        py
    } : 
    props) {
  return (
    <div>
        <p style={
            {
                fontSize: size,
                color: color,
                fontWeight : weight,
                fontFamily: family,
                paddingBlock: py,
                paddingInline: px
            }
            }
        >
            {text}
        </p>
    </div>
  )
}

export default Text