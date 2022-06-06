import React from "react";
import { Link } from "react-router-dom";
export class Formulario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastname: "",
      telephone: "",
      email: "",
      comments: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState
        ({value: event.target.value,
        });
    }

    handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    }

  render() {
    return (
      <div class="mb-3">
            <h1>Formulario</h1>
            <form onSubmit={this.handleSubmit}>
                <label for>
                    Primer y segundo nombre:
                    <input type="text" value={this.state.value} class="form-control"/>
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label for>
                    Apellidos paterno y materno: 
                    <input type="text" value={this.state.value} class="form-control"/>
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label for>
                    Número de teléfono:
                    <input type="text" value={this.state.value}  class="form-control"/>
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label for>
                    Email:
                    <input type="text" value={this.state.value} class="form-control" />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label for>
                    Comentarios:
                    <input type="text" value={this.state.value} class="form-control" />
                </label>
            </form>
        
            <form>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>  
            <div>
                <div>
                   
                    <button type="button" class="btn btn-dark" Link to><Link to='/' >Volver al Inicio</Link></button>
                    
                </div>
            </div>      
      </div>
    )
  }
}


export default Formulario;