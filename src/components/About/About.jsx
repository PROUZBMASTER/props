import React from 'react'

export default function About(props) {
    console.log(props.name);
    return(
        <>
        <h2>Hello My name is {props.name}</h2>
        </>
    )
}