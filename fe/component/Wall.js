import React, {Component} from 'react'

class Wall extends Component{
    constructor(p){
        super(p)
        this.state = {
            color:'#000',
            density: 1,
            radius: 10,
        }
        this.canvas = null
        this.paintParticle = new createjs.Shape(new createjs.Graphics().f(this.state.color).dc(0,0,this.state.radius*0.25))
    }

    componentDidMount(){
        this.canvas = new createjs.Stage('wall-canvas')
        this.canvas.on('stagemousemove', (e)=>{
            this.spray(e.currentTarget.mouseX, e.currentTarget.mouseY)
        })
    }

    componentDidUpdate(){
        const actualRadius = this.state.radius * 0.25
        this.paintParticle = new createjs.Shape(new createjs.Graphics().f(this.state.color).dc(0,0,actualRadius))
    }

    render(){
        return (
            <div>
                <canvas id='wall-canvas' width='600' height='315' style={{maxWidth: '90vw'}}>canvas</canvas> <br/>
                Color: <input type='color' name='color' onChange={onValueChange.bind(this)} />
                Density: <input type='number' name='density' onChange={onValueChange.bind(this)} />
                Radius: <input type='number' name='radius' onChange={onValueChange.bind(this)} />
            </div>
        )
    }

    spray(x,y){
        const particleCount = 10*this.state.density
        for(let i=0; i<particleCount; i++){
            const clone = this.paintParticle.clone()
            const diffX = Math.random()*this.state.radius*2 - this.state.radius
            const rad = Math.random()*this.state.radius
            const diffY = Math.sqrt(rad*rad - diffX*diffX) * (Math.random()>0.5?-1:1)
            clone.x = x + diffX
            clone.y = y + diffY
            clone.alpha = (this.state.radius/2) / (Math.sqrt(diffX*diffX + diffY*diffY) || 0.01)
            this.canvas.addChild(clone)
        }
        this.canvas.update()
    }
}


function onValueChange(e){
    const ns = {}
    ns[e.target.name] = e.target.value
    this.setState(ns)
}

export default Wall