import React from 'react'
import {List, InputItem} from 'antd-mobile'
import io from 'socket.io-client'
import {connect} from 'react-redux'
import {getMsgList} from '../../redux/chat.redux'

const socket = io('ws://localhost:9093')

@connect(
    state=>state,
    {getMsgList}
)
class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state={text:''}
    }
    componentDidMount(){
        //这里注意用箭头函数，否则绑不到组件上的this
        this.props.getMsgList()
        // socket.on('recvmsg', (data) =>{
        //     this.setState({
        //         msg:[...this.state.msg, data.text]
        //     })
        // })
    }
    handleSubmit(){
        socket.emit('sendmsg',{text:this.state.text})
        this.setState({text:''})
    }
    render(){
        console.log(this.prop)
        return (
            <div>
                {this.state.msg.map(v=>{
                    return <p>{v}</p>
                })}
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v=>{
                                this.setState({text:v})
                            }}
                            extra={<span onClick={()=>this.handleSubmit()}>发送</span>}
                        ></InputItem>
                    </List>
                </div>
            </div>
        )
    }
}