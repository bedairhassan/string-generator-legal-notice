import React from 'react'

function DisplayString({name,gender,title}) {

    const string = ({ teacher: { name, title, gender } }) => `I am allowed, based on agreement with ${name}, to upload unlisted, which means a private video whereas viewers with link only have access , videos of or relating to the ${title}'s sessions as long as the students of the current subject do not share it to other students' and as long as videos are set to private at end of semester to prevent further potential abuse. Any changes to this agreement is owned by the ${title} ${gender.toLowerCase() === `male` ? `himself` : `herself`}, and I, as the uploader, shall follow. This is to avoid trouble. Thank you.`

    return (

        <React.Fragment>
            <h2>Legal Note:</h2>
            <p style={{
                textAlign: 'justify',
                textJustify: 'inter-word'
            }}>{string({ teacher: {name,gender,title} })}</p>
        </React.Fragment>
    )
}

export default DisplayString
