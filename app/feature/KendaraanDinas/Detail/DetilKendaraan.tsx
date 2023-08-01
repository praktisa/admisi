'use client'
import React, { useRef } from 'react'
import DKD from './DetilKendaraan.module.css'
import ButtonBack from '@Components/Button/ButtonBack/ButtonBack'
import Image from 'next/image'
import Kalender from '@/app/feature/Components/Kalender/KalenderCookie'
import Pinjam from '@feature/KendaraanDinas/Pinjam/Pinjam'
import TextArea from '@Components/Input/TextArea/TextArea'

interface inter__pinjam {
    data: any
}


export default function DetilKendaraan({ data }: inter__pinjam) {

    const KalenderRef = useRef<React.MutableRefObject<string[] | null>>()
    const TujuanRef = useRef<React.MutableRefObject<string | null>>()
    const RangkaRef = useRef<React.MutableRefObject<string | null>>()
    const SliderRef = useRef<HTMLDivElement | null>(null)
    // case baru diatas merupakan useRef MutableObject

    const PostRef = useRef<any>({
        Kalender: [],
        Tujuan: "",
        Rangka: ""
    })



    const { str_plat, str_nama, str_img, date_servis } = data

    function PinjamMobil() {
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
                        </div>

                        <div className={DKD['slide__back']} >
                            <Kalender ref={PostRef} onClose={() => ShowSlider(false)} />
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
                        <div className={DKD['date']} >
                            <div className={DKD['datepick']} onClick={() => ShowSlider(true)} >Pilih Tanggal</div>
                            <div className={DKD['availabilty']} >Hari Ini tersedia</div>
                        </div>

                        <div className={DKD['Destination']}>
                            <TextArea label={"Dalam Rangka"} />
                            <TextArea label={"Tujuan"} />
                        </div>
                        <div className={DKD['Submit']} >
                            <Pinjam
                                PostData={PostRef}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
