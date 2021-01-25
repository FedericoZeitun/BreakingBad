import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import Frase from './Components/Frase'

const Contenedor = styled.div`
    display: flex;
    align-items:center;
    padding-top: 5rem;
    flex-direction: column;
`

const Boton = styled.button`
    background:-webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0F574E 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #FAFAFA;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    transition: background-size .3s ease;

    :hover{
        cursor: pointer;
        background-size: 900px;
    }
`

function App() {

    const [frase, guardarFrase] = useState({})

    const consultarApi = async () =>{
        const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        const frase = await api.json()
        guardarFrase(frase[0])
    }

    useEffect(()=>{
        consultarApi()
    }, [])

  return (
    <div className="App">
        <Contenedor>
            <Frase
                frase = {frase}
            />
                <Boton
                    onClick={consultarApi}
                >
                    Obtener frase
                </Boton>
        </Contenedor>
    </div>
  );
}

export default App;
