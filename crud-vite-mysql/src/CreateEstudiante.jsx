import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateEstudiante() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/create', {name, email})
        .then(res => {
            console.log(res)
            navigate('/')

        }).catch(err => console.log(err))
    }

    return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}> 
                <h2>Añadir estudiante</h2>
                <div className="mb-2">
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder='Ingrese un nombre' className='form-control' onChange={e => setName(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="text" className='form-control' placeholder='Ingrese un email' onChange={e => setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Enviar</button>
            </form>

        </div>
    </div>
    )
}

export default CreateEstudiante