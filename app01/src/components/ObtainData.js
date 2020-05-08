import React, { useState } from 'react'
import Input from '../components/reusable/Input'

export default function ObtainData({ onClick }) {

    var [obj, objSet] = useState({ name: ``, title: ``, gender: `` })
    // var[name,nameSet]=useState(``)
    // var[gender,genderSet]=useState(``)
    // var[title,titleSet]=useState(``)

    return (

        <React.Fragment>

            <Input placeholder={`name`} returnData={name => objSet({ ...obj, name })} />
            <Input placeholder={`title`} returnData={title => objSet({ ...obj, title })} />
            {/* <Input placeholder={`gender`} returnData={gender => objSet({ ...obj, gender })} /> */}

            <select onClick={(e) => {

                console.log(e.target.value)
                objSet({ ...obj, gender: e.target.value })
            }}>
                <option value="\">Please specify</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <button onClick={() => {

                var { gender } = obj

                if(gender!==`male` || gender!==`female`){
                    // genderSet(`male`)
                    objSet({...obj,gender:`male`})
                }

                console.log(`displaying gender at button`,gender)

                onClick(obj)
            }}>Submit</button>
        </React.Fragment>
    )
}

