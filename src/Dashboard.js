import React from 'react'
import App from './App'
import {
    BrowserRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom'

const Fatter = () => <h1>肥宅</h1>
const Daer = (props) => {
    return (<h1>{props.match.params.power}</h1>)
}

export default class Dashboard extends React.Component{
    render(){
        const app = (
            <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">主页</Link></li>
                    <li><Link to="/daer/Fatter">肥宅</Link></li>
                    <li><Link to="/daer/大儿">大儿</Link></li>
                    <li><Link to="/daer/橘猫">橘猫</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/daer/Fatter" component={Fatter}></Route>
                    <Route path="/daer/:power" component={Daer}></Route>
                </Switch>
            </div>
        </BrowserRouter>
        )
        return app
    }
} 