import React, { Component } from 'react';
import lightOff from './LightOff.jpeg'
import lightOn from './LightOn.jpeg'
import bulbon from './Bulbon.jpg'
import bulboff from './Bulboff.jpg'
class Light extends Component{
    constructor(props){
        super(props)
        this.state = {
            switch: lightOff, color: bulboff,

        }
    }
        checkLight = () => {
            if (this.state.switch == lightOff) {
                this.setState({switch: lightOn, color: bulbon})
            } else {
                this.setState({switch: lightOff, color: bulboff})
            }

        }
    render() {

        return(
            <div>
                <img src={this.state.color} onClick={this.checkLight}/>
                    <br />
                <img src={this.state.switch}onClick= {this.checkLight}/>
            </div>
        )
    }
}
export default Light
