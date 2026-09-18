import React from 'react'

function Container({children}) {
  return (

    <div style={{maxWidth: "100%" ,width: "90vw" ,margin: "0 auto"}}>
        {children}

    </div>
  )
}

export default Container