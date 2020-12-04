import React, { useState } from 'react'
import Pokemon from './Pokemon'

export default function DnD(props) {
    
    const [pokeProps, setPokeProps] = useState(props)
    console.log(props)

    return (
        <div>
            <div className="drag-n-drop">
                <div className="dnd-group">
                <div className="group-title">First team</div>
                    <div className="dnd-item">
                    <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
