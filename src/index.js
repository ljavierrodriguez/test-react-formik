import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ValidationSchemaExample } from './ValidationSchemaExample';


const App = () => {

    const [name, setName] = useState("");

    const [state, setState] = useState({
        name: '',
        lastname: '',
        todos: []
    })



    return (
        <>
            <h1>Hola {name}</h1>
            <input type="text" onChange={evento => setName(evento.target.value)} />

            <button onClick={() => {
                /* setState({ 
                    ...state,
                    name: name 
                }) */

                setState((prevState) => {
                    return {
                        ...prevState,
                        name: name
                    }
                })

            }}>Asignar Nombre</button>


            <button onClick={() => {
                /* setState((preState) => {
                    let todos = [...preState.todos, name]
                    return {
                        ...preState,
                        todos
                    }
                }) */

                let todos = [...state.todos, name];
                setState({
                    ...state,
                    todos
                })


            }}>
                Guardar Nombre
            </button>
        </>
    )
}

ReactDOM.render(<ValidationSchemaExample />, document.querySelector('#root'));