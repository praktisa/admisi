'use client'
import React from 'react'

interface Pinjam_inter {
    PostData: any

}

export default function Pinjam({ PostData }: Pinjam_inter) {

    function POST() {
        console.log("POST", PostData)
    }

    return (
        <div onClick={() => POST()}>Pinjam</div>
    )
}
