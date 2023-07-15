import PesanMobil from '@/app/feature/KendaraanDinas/Pinjam'
import Modals from '@/app/feature/global/Modals/Modals'
import React from 'react'

interface Param {
    params: { dk: string }
}

export default function page({ params }: Param) {

    return (
        <>

            <Modals>
                <div>PESAN MOBIL MODALLLLLLLL {params.dk}</div>
            </Modals>

        </>
    )
}
