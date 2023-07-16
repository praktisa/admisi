'use client'
import React, { useRef } from 'react'
import BasicInput from '../Components/Input/BasicInput'

export default function Login() {
    const refNIP = useRef<null | HTMLInputElement>(null)

    function CekNIP() {
        console.log("refNIP", refNIP.current?.value)
    }

    return (
        <>

            <BasicInput type="number" ref={refNIP} />
            <button onClick={() => CekNIP()} >Masuk</button>

        </>
    )
}
