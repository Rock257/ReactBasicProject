import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import './joke.css'
import { useState } from "react";


function Joke(){

    const [joke ,setJoke] =useState('Jokes Will Appear Here')

    function handleClick(){
        // console.log('Hello')
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res)=>res.json())
        .then((data)=>setJoke(data.joke))
        console.log(joke)

    }

    return(
        <>
        <Button onClick={()=>handleClick()}>Click Here</Button>
        <div className="jokes">
            <p>{joke}</p>
        </div>
        </>
    )
}

export default Joke