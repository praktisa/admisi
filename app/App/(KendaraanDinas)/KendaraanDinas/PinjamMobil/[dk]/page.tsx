import DetilKendaraan from '@feature/KendaraanDinas/Detail/DetilKendaraan'
import getKendaraanByPlat from '@feature/KendaraanDinas/Detail/fetcher/getKendaraanByPlat'

import React from 'react'

interface Param {
    params: { dk: string }
}

export default async function page({ params }: Param) {

    const data: any = await getKendaraanByPlat(params.dk)

    return (
        <>
            {
                data
                    ?
                    <DetilKendaraan data={data.data} />
                    :
                    <div>Loading ...</div>
            }

        </>
    )
}
