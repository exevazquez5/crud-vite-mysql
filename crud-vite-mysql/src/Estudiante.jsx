import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Estudiante() {
    const [estudiante, setEstudiante] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3000/')
        .then(res => setEstudiante(res.data))
        .catch(err => console.log(err))
    })

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/estudiante/${id}`)
            window.location.reload()
    } catch (err) {
        console.log(err)
    }
}

    return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-success'> Agregar + </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                estudiante.map((data, i)=> (
                        <tr key={i}>
                            <td>{data.Nombre}</td>
                            <td>{data.Email}</td>
                            <td>
                                <Link to={`update/${data.ID}`} className='btn btn-primary m-1'>Actualizar</Link>
                                <button className='btn btn-danger m-1' onClick={e => handleDelete(data.ID)}>Borrar</button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        
    </div>
    )
}

export default Estudiante