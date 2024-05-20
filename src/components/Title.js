import React from 'react'

const Title = ({title, spanText}) => {
  return (
    <div className="section-title">
    <h2> {title} <span>{spanText}</span></h2>
  </div>
  )
}

export default Title
