import React, { forwardRef } from 'react'

interface BasicInput_inter {
    type: string
    ref: HTMLInputElement
}

const BasicInput = forwardRef<HTMLInputElement, BasicInput_inter>(({ type }, ref) => (
    <>
        <input type={type} ref={ref} placeholder='Masukan NIP Pendek Anda ...' />
    </>
));

export default BasicInput