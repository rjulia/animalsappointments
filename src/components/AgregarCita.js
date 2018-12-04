import React, { Component } from 'react';
import uuid from 'uuid';

export class AgregarCita extends Component {

  horeRef = React.createRef();
  state = {}
  constructor(props) {
    super(props);
    this.state = {
      mascota: '',
      dueno:'',
      date: new Date(),
      time: undefined,
      sintomas: '',
      error: true
    
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.crearNuevaCita = this.crearNuevaCita.bind(this);
  }
  initState = {...this.state}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    if (this.state.mascota === '' || 
        this.state.dueno === '' ||
        this.state.sintomas === '' ||
        this.state.time === undefined) {
          this.setState({
            error: true
          });
        }
    else {
      this.setState({
        error: false
      });
    }
  }
  
  crearNuevaCita = (event) => {

   
    const nuevaCita = this.state;

    nuevaCita.id = uuid();

    event.preventDefault()
    this.props.crearCitas(nuevaCita);
    this.horeRef = null
    this.setState({
      mascota: '',
      dueno:'',
      sintomas: '',
      time: undefined,
      date: new Date(),
      error: false
    
    })
  }
  

  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agregar las Citas Aqui</h2>
          <form onSubmit={this.crearNuevaCita}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
              <div className="col-sm-8 col-lg-10">
                <input 
                  type="text"
                  name="mascota"
                  value={this.state.mascota}
                  onChange={this.handleInputChange}
                  className="form-control" 
                  placeholder="Nombre Mascota" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
              <div className="col-sm-8 col-lg-10">
                <input 
                type="text"
                name="dueno"
                value={this.state.dueno}
                onChange={this.handleInputChange} 
                className="form-control" 
                placeholder="Nombre Dueño de la Mascota" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input 
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleInputChange} 
                  className="form-control" />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input 
                  type="time"
                  name="time"
                  ref={this.horeRef}
                  onChange={this.handleInputChange}  
                  className="form-control" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea 
                  name="sintomas"
                  value={this.state.sintomas}
                  onChange={this.handleInputChange}  
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <button 
                disabled={this.state.error}
                type="submit" 
                className="btn btn-success w-100">Agregar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AgregarCita
