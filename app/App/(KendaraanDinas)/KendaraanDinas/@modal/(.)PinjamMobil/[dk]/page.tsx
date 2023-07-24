// import PesanMobil from '@/app/feature/KendaraanDinas/Pinjam'
import Modals from '@/app/feature/Components/Modals/BasicModal/Modals'
import React from 'react'
import DetilKendaraan from '@feature/KendaraanDinas/Detail/DetilKendaraan'

interface Param {
    params: { dk: string }
}

export default function page({ params }: Param) {

    return (
        <>

            <Modals>
                <DetilKendaraan dk={params.dk} />
            </Modals>

        </>
    )
}
