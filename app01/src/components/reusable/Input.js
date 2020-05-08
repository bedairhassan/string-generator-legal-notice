import React from 'react'


export default function Input({placeholder,returnData}) {
    return (
        
        <input placeholder={placeholder} onChange={(e)=>returnData(e.target.value)}/>
        // <h1>input</h1>
    )
}

