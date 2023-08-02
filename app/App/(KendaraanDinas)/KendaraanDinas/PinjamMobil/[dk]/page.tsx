import Detail from '@/app/feature/KendaraanDinas/Detail/Detail'
import getKendaraanByPlat from '@feature/KendaraanDinas/Detail/fetcher/getKendaraanByPlat'
import getTerpinjamMobil from '@/app/feature/KendaraanDinas/Pinjam/fetcher/getTerpinjamMobil'

import React from 'react'

interface Param {
    params: { dk: string }
}

export default async function page({ params }: Param) {

    const Kendaraan: any = await getKendaraanByPlat(params.dk)
    const tgl: any = await getTerpinjamMobil(params.dk)

    return (
        <>

            <Detail data={Kendaraan.data} terpinjam={tgl.data} />

        </>
    )
}
