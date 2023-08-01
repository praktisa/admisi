import React from 'react'
import LabelArea from '../_Label/TextArea/LabelArea'


interface TextArea__Inter {
    label: string
}

const TextArea = ({ label }: TextArea__Inter) => {
    return (

        <LabelArea htmlFor='Area' label={label} >
            <textarea spellCheck="false" id={"Area"} rows={0} placeholder={``} >

            </textarea>
        </LabelArea>
    )
}

export default TextArea
