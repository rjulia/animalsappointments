import React, { Component } from 'react'

export class Cita extends Component {
  eliminarCita = () =>{

    this.props.borrarCita(this.props.cita.id)

  }
  render() {

    const {date, dueno, mascota, sintomas, time } = this.props.cita
    return (
      <div className="media mt-3">
        <div className='media-body'>
          <h3 className="mt-0"> Nombre de la mascota: {mascota}</h3>
          <p className="card-text"> Nombre del dueño: {dueno} </p>
          <p className="card-text"> Hora: {time}</p>
          <p className="card-text"> Dia: {date}</p>
          <p className="card-text"> sintomas: {sintomas}</p> 
          <button className="btn btn-danger" onClick={this.eliminarCita}>Borrar</button>         
        </div>
      </div>
    )
  }
}

export default Cita
