import React, { Component } from 'react'
import Cita from './Cita'

export class ListaCitas extends Component {


  render() {
    const citas = this.props.citas

    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : " Administra tus citas Aqui"

    const listCitas = citas.map(cita => {
      return <Cita 
        cita={cita} 
        key={cita.id}
        borrarCita={this.props.borrarCita} />  
    })
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">{mensaje}</h2>
          <div className='lista-citas'>
            {listCitas}
          </div>
        </div>
      </div>
    )
  }
}

export default ListaCitas
