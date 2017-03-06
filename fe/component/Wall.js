import React, {Component} from 'react'

class Wall extends Component{
    constructor(p){
        super(p)
        this.state = {
            color:'#FFF',
            density: 40,
            radius: 10,
        }
    }

    render(){
        return (
            <div>
                <canvas width='600' height='315' style={{maxWidth: '90vw'}}>canvas</canvas> <br/>
                Color: <input type='color' name='color' onChange={onValueChange.bind(this)} />
                Density: <input type='number' name='density' onChange={onValueChange.bind(this)} />
                Radius: <input type='number' name='radius' onChange={onValueChange.bind(this)} />
            </div>
        )
    }
}

function onValueChange(e){
    const ns = {}
    ns[e.target.name] = e.target.value
    this.setState(ns)
}

export default Wall