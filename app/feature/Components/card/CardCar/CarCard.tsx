import React from 'react'
import CC from './CarCard.module.css'
import Image from 'next/image'
import ImageFill from '../../Image/ImageFill'

interface Card {
    name: string,
    plat: string,
    img: string,
    seksi: string,
    status: string
}


export default function CarCard({
    name = "Expander",
    plat = "DK 1206 XY",
    img = "",
    seksi = "",
    status = "Terpinjam"
}: Card) {

    function Status({ status, seksi }: any) {
        return (
            <>
                <div className={CC['Terpinjam']}>
                    <div>{status}</div>
                    {seksi}
                </div>
            </>
        )
    }

    return (

        <div className={CC['CardPosition']} id={plat}  >

            <div
                id={name}
                className={CC['CardLayout']}

            >
                <div className={CC['Layout__img']} >

                    {
                        seksi.length != 0 ? <Status status={status} seksi={seksi} /> : <></>
                    }

                    <ImageFill src={img} />


                    <div className={CC['Layout__act']} >
                        <div className={CC['Layout__CarName']} >
                            <span className={CC['CarName']} >{name}</span>
                        </div>
                        <div className={CC['Layout__Button']} >
                            <div className={CC['CarPLAT']} >{plat}</div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
