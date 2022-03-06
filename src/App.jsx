import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import PacientList from "./components/PacientList"

function App() {

  const [pacientes, setPacientes] = useState([])

  const [paciente, setPaciente ] = useState({})

  useEffect(() => {
    const obtenerLs = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLs();

  }, [])

  useEffect(() => {
    //console.log('Componente listo o cambio pacientes')
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id) => {
const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-10">
      <Header
        numeros={1}
      />
      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <PacientList 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente= {eliminarPaciente}
        />

      </div>
    </div>
  )
}

export default App
