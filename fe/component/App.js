import React, {Component} from 'react'

const App = ({children}) => {
    return (
        <div>
            <h1> This is app. </h1>
            {children}
        </div>
    )
}

export default App