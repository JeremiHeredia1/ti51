import React from 'react';
import { Link } from "react-router-dom";

export function  Sumamulti() {
    const [number, setNum] = React.useState({ one: "", two: "" });
    const [result, setResult] =React.useState();

    const handleInput = function (ev) {
      setNum({
        ...number,
        [ev.target.name]: ev.target.value
      });
    };

    const sum = function () {
        setResult((+number.one) + (+number.two));
      };
    
       const multi = function () {
        setResult((+number.one) * (+number.two));
      };

    return <>
        <div className="Operations">
            <h2>Enter two number to add or mulplication</h2>
            <div>
                <input className="input" onChange={handleInput} name="one" value={number.one} type="text" />
                <input className="input" onChange={handleInput} name="two" value={number.two} type="text" />
            </div>
            <div>
                <button onClick={sum} class="btn btn-danger">Sumar</button>
                <button onClick={multi} class="btn btn-success">Multiplicar</button>
            </div>
            <div>
                <h4>El resultado es: <span> {result} </span> </h4> 
            </div>

            <div>
                <div>
                    <li>
                        <lu><Link to='/' >Volver al Inicio</Link> </lu>
                    </li>
                </div>
            </div>


        </div>
    </>
}

export default Sumamulti;