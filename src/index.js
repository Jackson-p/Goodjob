import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Reducers from './reducers'
import Dashboard from './Dashboard';
import Auth from './Auth' 


const store = createStore(Reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():()=>console.log('no redux tool')
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/dashboard' component={Dashboard} />
                <Redirect to='/login' />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)