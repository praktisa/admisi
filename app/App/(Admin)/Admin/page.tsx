// // "use client"
// import DataPegawai from '@/app/feature/Kepegawaian/DataPegawai'
import React from 'react'


async function getDataPegawai() {
    const res = await fetch('http://0.0.0.0:3000/Admin/api')

    if (!res.ok) {

        throw new Error('Failed to fetch data')
    }

    return res.json()

}

export default async function Page() {

    const WEE = await getDataPegawai()

    return (
        <>
            Ini adalah Page Admin

            <div> {WEE.data}</div>

            {/* <DataPegawai /> */}
        </>
    )
}
