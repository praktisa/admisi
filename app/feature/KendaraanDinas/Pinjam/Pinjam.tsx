'use client'
import React from 'react'
import postPinjamMobil from './fetcher/postPinjamMobil'

interface Pinjam_inter {
    PostData: any

}

export default async function Pinjam({ PostData }: Pinjam_inter) {

    async function POST() {
        let Response = await postPinjamMobil(PostData)

        console.log("Response", Response)
    }

    return (
        <div onClick={() => POST()}>Pinjam</div>
    )
}
