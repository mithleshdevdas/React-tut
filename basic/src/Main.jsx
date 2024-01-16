// @ts-nocheck
import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App.jsx'

function Say() {
 return <h1>wowowowowo</h1>
}

const Another = (
  <a href="https://google.com" target='_blank'>google</a>
)
const Reactele = React.createElement(
  'h1',
  {},
  'hello mithlesh'
 )

ReactDOM.createRoot(document.getElementById('root')).render(

  // Another
   Reactele
  // <Say/>


)
