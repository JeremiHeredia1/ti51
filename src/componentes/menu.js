import React from "react"
import { Link } from "react-router-dom";

export function Menu() {
    return (
    
    
    <>
        <nav class="navbar navbar-dark bg-dark">
            <div className="center">
                <button type="button" class="btn btn-light"><lu><Link to='/formulario' >Formulario</Link></lu></button>
                <button type="button" class="btn btn-light"><lu><Link to='/calcuFayCel' >Celsius a Fahrenheit - Fahrenheit a Celsius</Link> </lu></button>
                <button type="button" class="btn btn-light"><lu><Link to='/sumamult' >Suma y mulplication</Link> </lu></button>
            </div>
        </nav>

    
    </>
        
        
    )
}