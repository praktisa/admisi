'use client'
import React from 'react'
import Back from '../global/Back/Back'
import axios from 'axios'
import { resolve } from 'path'


interface inter__pinjam {
    modal: boolean,
    dk: string
}


export async function getKendaraanByPlat(dk: string) {

    try {
        const res: any = await axios('http://localhost:3000/KendaraanDinas/api')
            .then(r => r.data)

        return JSON.stringify(res)

    } catch (error) {
        console.log("WADUH ERROR", error)
    }

}

export default async function DetilKendaraan({ modal, dk }: inter__pinjam) {

    const data: any = await getKendaraanByPlat(dk)
    console.log("DATAAA", JSON.parse(data))

    return (
        <>
            <h1>{dk}</h1>
            {/* <span>{data}</span> */}
            <Back />
        </>
    )
}
