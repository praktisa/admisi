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

    const SliderRef = useRef<HTMLDivElement | null>(null)

    const { str_plat, str_nama, str_img, date_servis } = data

    function CEKREF() {
        console.log("KalenderRef", KalenderRef.current)
    }


    function ShowSlider(stat: boolean) {
        let Slider = SliderRef.current
        if (Slider) {
            Slider.style.transform = stat === true ? "rotateY(180deg)" : "rotateY(0)"
        }

    }

    return (
        <>

            <div className={DKD['layout']} >

                <div className={DKD['layout__image']} >
                    <div className={DKD['slide__container']} ref={SliderRef}   >
                        <div className={DKD['slide__front']} >
                            <Image
                                src={`/KendaraanDinas/${str_img}.jpg`}
                                width={471}
                                height={428}
                                style={{ objectFit: "cover", display: "grid", width: "100%" }}
                                alt={str_img}
                                quality={50}
                            />
                            {/* <Kalender ref={KalenderRef} /> */}
                        </div>

                        <div className={DKD['slide__back']} >
                            <Kalender ref={KalenderRef} onClose={() => ShowSlider(false)} />
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
                        <div onClick={() => ShowSlider(true)} >Pilih Tanggal</div>
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
