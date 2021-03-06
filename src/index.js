import _ from 'lodash'

import printMe from './print'

import './style.css'

function component () {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  element.innerHTML = _.join(['You', 'will', 'never', 'win!'], ' ')

  btn.innerHTML = 'Click on me!'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!')
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
