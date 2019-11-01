import React, { Component } from 'react'
import ColorBox from  './ColorBox'
import './Palette.css'


class Palette extends Component{

    

    render() {
        const colorBoxes= this.props.colors.map(item=>
            <ColorBox color={item.color} name={item.name}/>)

        return(
        <div className="Palette">
        {/* navbar goes ere */}
           <div className="Palette-colors">
                {colorBoxes}
           </div>
           {/* footer goes ere */}
        </div>
        )
    }
}

export default Palette