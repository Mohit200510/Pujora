import React from 'react'

function CategorySvgLine({className}) {
  return (
    <div className={className}>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 400 80"
  preserveAspectRatio="none"
>
  <path
    fill="#FFF"
    d="M0,80
       L0,45
       C70,15 130,15 200,45
       C270,75 330,75 400,45
       L400,80
       Z"
  />
</svg>
    </div>
  )
}

export default CategorySvgLine