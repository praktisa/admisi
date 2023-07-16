'use client'
import React, { useRef } from 'react'
import BasicInput from '../Components/Input/Basic/BasicInput'
import ButtonClick from '../Components/Button/ButtonSubmit/ButtonSubmit'

export default function Login() {
    const refNIP = useRef<null | HTMLInputElement>(null)

    function CekNIP() {
        console.log("refNIP", refNIP.current?.value)
    }

    return (
        <>

            <BasicInput
                type="text"
                inputMode="numeric"
                ref={refNIP}
                label={"NIP 9 Digit"}
                placeholder={'123456789'}
                maxLength="9"
            />

            <ButtonClick onClick={() => CekNIP()} >Masuk</ButtonClick>
        </>
    )
}
