import React from 'react'
import CC from './CarCard.module.css'
import Image from 'next/image'

interface Card {
    name: string,
    plat: string,
    img: string
}


export default function CarCard({ name = "Expander", plat = "DK 1206 XY", img = "" }: Card) {

    function Terpinjam({Seksi: string})
    {
        return(
            <>
                <div>Terpinjam {Seksi}</div>
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
                    <Image
                        src={`/KendaraanDinas/${img}.jpg`}
                        width={310}
                        height={190}
                        style={{ objectFit: "cover", display: "block" }}
                        alt="Picture of the author"
                        quality={50}

                    />
                </div>

                <div className={CC['Layout__act']} >
                    <div className={CC['Layout__CarName']} >
                        <div className={CC['CarName']} >{name}</div>

                    </div>
                    <div className={CC['Layout__Button']} >
                        <div className={CC['CarPLAT']} >{plat}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
