import React, { forwardRef } from 'react'
import In from '../Input.module.css'

interface BasicInput_inter {
    type: string
    label: string
    inputMode: any
    placeholder: string
    maxLength: any
    ref: HTMLInputElement
}

const BasicInput = forwardRef<HTMLInputElement, BasicInput_inter>(({ type, label, placeholder, inputMode, maxLength }, ref) => (
    <>


        <label className={In['label']} htmlFor="basic">
            <input
                id="basic"
                type={type}
                ref={ref}
                placeholder={placeholder}
                inputMode={inputMode}
                maxLength={maxLength}
            />
            <span className={In['span']} > {label}</span>

        </label>



    </>
));

export default BasicInput