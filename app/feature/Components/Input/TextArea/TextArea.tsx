import React from 'react'
import Label from '../_Label/Label'


interface TextArea__Inter {
    label: string
}

const TextArea = ({ label }: TextArea__Inter) => {
    return (

        <Label htmlFor='Area' label={label} >
            <textarea id={"Area"} placeholder={``} >

            </textarea>
        </Label>
    )
}

export default TextArea
