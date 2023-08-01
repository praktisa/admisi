import Detail from '@/app/feature/KendaraanDinas/Detail/Detail'
import getKendaraanByPlat from '@feature/KendaraanDinas/Detail/fetcher/getKendaraanByPlat'

import React from 'react'

interface Param {
    params: { dk: string }
}

export default async function page({ params }: Param) {

    const data: any = await getKendaraanByPlat(params.dk)

    return (
        <>

            <Detail data={data.data} />

        </>
    )
}
