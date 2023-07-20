import DetilKendaraan from '@/app/feature/KendaraanDinas/DetilKendaraan'

import React from 'react'

interface Param {
    params: { dk: string }
}

export default function page({ params }: Param) {

    return (
        <>

            <DetilKendaraan modal={false} dk={params.dk} />
        </>
    )
}
