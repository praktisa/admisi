

import Modals from '@/app/feature/Components/Modals/BasicModal/Modals'
import React from 'react'
import getKendaraanByPlat from '@feature/KendaraanDinas/Detail/fetcher/getKendaraanByPlat'
import Detail from '@/app/feature/KendaraanDinas/Detail/Detail'
import Shimerloading from '@/app/feature/Components/loading/Shimerloading'

interface Param {
    params: { dk: string }
}

export default async function page({ params }: Param) {


    const data: any = await getKendaraanByPlat(params.dk)
    return (
        <>
            <Shimerloading loop={1} />
            <Detail data={data.data} />
        </>
    )
}
