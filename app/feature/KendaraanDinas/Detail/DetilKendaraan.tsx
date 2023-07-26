'use client'
import React, { useRef } from 'react'
import DKD from './DetilKendaraan.module.css'
import ButtonBack from '../../Components/Button/ButtonBack/ButtonBack'
import Image from 'next/image'
import Kalender from '@Components/Kalender/Kalender'

interface inter__pinjam {
    data: any
}



export default function DetilKendaraan({ data }: inter__pinjam) {

    const KalenderRef = useRef<React.MutableRefObject<string[] | null>>()
    // case baru diatas merupakan useRef MutableObject

    const { str_plat, str_nama, str_img, date_servis } = data

    console.log("KalenderRef", KalenderRef.current)

    // function ShowSlider(id, stat) {
    //     let Slider = document.getElementById(id)
    //     let Kalender = document.getElementById("Kalender")
    //     if (stat === true) {

    //         Slider.style.transform = "rotateY(180deg)"

    //     } else {

    //         Slider.style.transform = "rotateY(0)"

    //         console.log("DateRef", DateRef.current)

    //     }
    // }

    return (
        <>

            <div className={DKD['layout']} >

                <div className={DKD['layout__image']} >
                    <div className={DKD['image__container']}  >
                        <div className={DKD['slide__front']} >
                            {/* <Image
                                src={`/KendaraanDinas/${str_img}.jpg`}
                                width={471}
                                height={432}
                                style={{ objectFit: "cover", display: "grid", width: "100%" }}
                                alt={str_img}
                                quality={50}
                            /> */}
                            <Kalender ref={KalenderRef} />
                        </div>

                        <div className={DKD['slide__back']} >
                            {/* <Kalender ref={KalenderRef} /> */}
                        </div>

                    </div>
                </div>

                <div className={DKD['layout__detail']}>

                    <div className={DKD['detail__header']} >
                        <h1>{str_nama}</h1>
                        <h4>{str_plat}</h4>
                        <ButtonBack>✕</ButtonBack>
                    </div>

                    <div className={DKD['detail__form']} >
                        <div>Pilih Tanggal</div>
                        <div>
                            <label htmlFor="tujuan">Tujuan Peminjaman</label>
                            <textarea id="tujuan" rows={8} cols={45} placeholder={`Tujuan Pengunaan ${str_nama} ...`} ></textarea>
                        </div>
                        <div>
                            Pinjam Mobil
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
