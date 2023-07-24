// 'use client'
import React, { useRef } from 'react'
import getKendaraanByPlat from '@feature/KendaraanDinas/Detail/fetcher/getKendaraanByPlat'
import BigImage from '../../Components/Image/Big/BigImage'
import DK from './DetilKendaraan.module.css'
import ButtonBack from '../../Components/Button/ButtonBack/ButtonBack'
import Image from 'next/image'
import Kalender from '@Components/Kalender/Kalender'

interface inter__pinjam {

    dk: string
}



export default async function DetilKendaraan({ dk }: inter__pinjam) {

    const data: any = await getKendaraanByPlat(dk)


    const { str_plat, str_nama, str_img, date_servis } = data.data

    // const refTanggal = useRef<null | HTMLInputElement>(null)

    return (
        <>

            <div className={DK['layout']} >

                <div className={DK['layout__image']} >
                    <div className={DK['image_container']}  >
                        {/* <Image
                            src={`/KendaraanDinas/${str_img}.jpg`}
                            width={471}
                            height={432}
                            style={{ objectFit: "cover", display: "grid", width: "100%" }}
                            alt={str_img}
                            quality={50}
                        /> */}

                        <Kalender />
                    </div>
                </div>

                <div className={DK['layout__detail']}>

                    <div className={DK['detail__header']} >
                        <h1>{str_nama}</h1>
                        <h4>{str_plat}</h4>
                        <ButtonBack>✕</ButtonBack>
                    </div>

                    <div className={DK['detail__form']} >

                    </div>
                </div>

            </div>

        </>
    )
}
