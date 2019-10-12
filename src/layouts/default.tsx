import React from 'react'
import '../styles/main.css'

const DefaultLayout: React.FC = props => {
  return <div className="container mx-auto">{props.children}</div>
}

export default DefaultLayout
