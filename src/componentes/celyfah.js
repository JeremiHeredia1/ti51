import React from "react";
import { Link } from "react-router-dom";
export class Calculator extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { scale: 'c', temp: '0' }
    };

    handleCelsius = (e) => {
        this.setState({ scale: 'c', temp: e.target.value })
    };

    handleFahrenheit = (e) => {
        this.setState({ scale: 'f', temp: e.target.value })
    };


    render() {
        const temp = this.state.temp;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? (temp - 32) * 5 / 9 : temp;
        const fahrenheit = scale === 'c' ? (temp * 9 / 5) + 32 : temp;
        
        return <>
        <div className="Calculator">
            <h2>Celsius a Fahrenheit - Fahrenheit a Celsius </h2>
            <fieldset>
                <legend> Scale Celsius </legend>
                <input className="input" value={celsius} onChange={this.handleCelsius} type="text"/>
               
            </fieldset>

            <fieldset>
                <legend> Scale Fahrenheit </legend>
                <input value={fahrenheit} onChange={this.handleFahrenheit} />
            </fieldset>

            <div>
                <div>
                    <li>
                        <lu><Link to='/' >Volver al Inicio</Link> </lu>
                    </li>
                </div>
            </div>
        </div></>
    }
};


export default Calculator;