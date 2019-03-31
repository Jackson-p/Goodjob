import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Redirect } from 'react-router-dom'

class Auth extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                {this.props.isAuth? <Redirect to='./dashboard' /> :null}
                <h1>请先登录哦</h1>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.changeAuth
}

const mapDispatchToProps = {login}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)