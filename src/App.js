import React from 'react'
import { connect } from 'react-redux'
import { addliao, decliao, asyncAddliao } from './index.redux'

import { Button } from 'antd-mobile'

// @connect(
//     (state) => ({num:state}), //注意这里的括号不能省
//     {addliao, decliao, asyncAddliao}
// )
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>现在有{this.props.num}只liao</h1>
                <Button type="primary" onClick={this.props.addliao} style={{"cursor":"pointer","width":"50%","margin":"auto"}}>加liao</Button>
                <br />
                <Button type="primary" onClick={this.props.decliao} style={{"cursor":"pointer","width":"50%","margin":"auto"}}>减liao</Button>
                <br />
                <Button type="primary" onClick={this.props.asyncAddliao} style={{"cursor":"pointer","width":"50%","margin":"auto"}}>异步加liao</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { num : state.adjustLiao }
}

const mapDispatchToProps = {addliao, decliao, asyncAddliao}

export default connect(mapStateToProps, mapDispatchToProps)(App)

