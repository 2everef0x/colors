import React, { Component } from 'react'
import './ColorBox.css'

class ColorBox extends Component{

    constructor(props){
         super(props)

    }

    render() {

        return(
        <div style ={{backgroundColor:this.props.color}}className="ColorBox">
            <span>More</span>
        </div>
        )
    }
}

export default ColorBox