import React from 'react'
import { addliao, decliao } from './index.redux'
import { Button } from 'antd-mobile'

export default class App extends React.Component{
    render(){
        const store = this.props.store
        const num = store.getState()
        return(
            <div>
                <h1>现在有{num}只liao</h1>
                <Button type="primary" onClick={() => store.dispatch(addliao())} style={{"cursor":"pointer"}}>加liao</Button>
                <Button type="primary" onClick={() => store.dispatch(decliao())} style={{"cursor":"pointer"}}>减liao</Button>
            </div>
        )
    }
}