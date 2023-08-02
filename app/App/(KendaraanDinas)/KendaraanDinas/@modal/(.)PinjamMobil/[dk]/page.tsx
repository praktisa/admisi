
import React from 'react'
import getKendaraanByPlat from '@feature/KendaraanDinas/Detail/fetcher/getKendaraanByPlat'
import Detail from '@/app/feature/KendaraanDinas/Detail/Detail'
import Shimerloading from '@/app/feature/Components/loading/Shimerloading'
import getTerpinjamMobil from '@/app/feature/KendaraanDinas/Pinjam/fetcher/getTerpinjamMobil'

interface Param {
    params: { dk: string }
}

export default async function page({ params }: Param) {


    const Kendaraan: any = await getKendaraanByPlat(params.dk)
    const tgl: any = await getTerpinjamMobil(params.dk)

    return (
        <>
            <Shimerloading loop={1} />
            <Detail data={Kendaraan.data} terpinjam={tgl.data} />
        </>
    )
}
