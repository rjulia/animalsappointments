import React, { Component } from 'react';
import Header from './Header'
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas'

class App extends Component {
  state = {
    citas: []
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita]

    this.setState({
      citas
    })
  }

  borrarCita = (citaId) => {

      const citasActuales = [...this.state.citas];

      const citas = citasActuales.filter(x => {return x.id !== citaId})

      this.setState({
        citas
      })
  }
  
  render() {
    return (
      <div className="container">
        <Header
        titulo =" mis animalitos"/>

        <div className="row">
            <div className='col-md-6'>
              <AgregarCita
              crearCitas={this.crearCita}/>
            </div>

            <div className='col-md-6'>
              <ListaCitas
              citas={this.state.citas}
              borrarCita = {this.borrarCita}
              />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
