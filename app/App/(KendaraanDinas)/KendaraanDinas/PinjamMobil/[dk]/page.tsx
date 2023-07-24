import DetilKendaraan from '@feature/KendaraanDinas/Detail/DetilKendaraan'

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
