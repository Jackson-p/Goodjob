import React from 'react'
import { connect } from 'react-redux'
import { login,getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom'

class Auth extends React.Component{
    componentDidMount(){
        this.props.getUserData()
    }
    render(){
        return (
            <div>
                {this.props.isAuth? <Redirect to='./dashboard' /> :null}
                <h1>{this.props.name}{this.props.age}岁</h1>
                <h1>请先登录哦</h1>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.changeAuth
}

const mapDispatchToProps = {login, getUserData}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)