import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './index.redux'
import App from './App'

function render(){
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    )
}
render()
store.subscribe(render)