import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'

import {App, Hello} from './component'

class Root extends Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={App} >
                    <IndexRoute component={Hello} />
                    <Route path='hello' component={Hello} />
                </Route>
            </Router>
        )
    }
}

render(<Root />, document.getElementById('app'))