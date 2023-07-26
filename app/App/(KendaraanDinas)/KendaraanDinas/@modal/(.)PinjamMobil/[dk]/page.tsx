

import Modals from '@/app/feature/Components/Modals/BasicModal/Modals'
import React from 'react'
import DetilKendaraan from '@feature/KendaraanDinas/Detail/DetilKendaraan'
import getKendaraanByPlat from '@feature/KendaraanDinas/Detail/fetcher/getKendaraanByPlat'

interface Param {
    params: { dk: string }
}

export default async function page({ params }: Param) {


    const data: any = await getKendaraanByPlat(params.dk)

    return (
        <>

            <Modals>
                {
                    data
                        ?
                        <DetilKendaraan data={data.data} />
                        :
                        <div>Loading ...</div>
                }
            </Modals>

        </>
    )
}
