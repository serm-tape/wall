import React, {Component} from 'react'
import Router, {Route, IndexRoute} from 'react-router'
import {render} from 'react-dom'

import {App, Hello} from './component'

const Root = ()=>{
    return (
        <Router>
            <Route path='/' component={App}>
                <Route path='hello' component={Hello} />
            </Route>
        </Router>
    )
}

render(<Root />, document.getElementById('app'))