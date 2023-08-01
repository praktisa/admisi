import { GridMobil } from '@/app/feature/KendaraanDinas/FilterMobil'
import CarCard from '@/app/feature/Components/card/CardCar/CarCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

interface DataMobil {
    name: string,
    plat: string,
    img: string
}


export default function Page() {

    const Mobil: DataMobil[] = [
        { name: "Daihatsu Terios", plat: "DK 1705 XX", img: "terios" },
        { name: "Mitsubishi Triton", plat: "DK 1205 ABS", img: "triton" },
        { name: "Nissan Livina", plat: "DK 1845 TY", img: "livina" },
        { name: "Mitsubishi Expander 06", plat: "DK 2006 TX", img: "expander06" },
        { name: "Mitsubishi Expander 05", plat: "DK 2005 DX", img: "expander06" },
        { name: "Suzuki APV", plat: "DK 1213 APV", img: "apv" },
        { name: "Toyota Inova", plat: "DK 0908 INO", img: "inova" },
    ]

    return (
        <>


            <GridMobil>
                {
                    Mobil.map((mob, i) => {
                        let slug: string = mob.plat.replaceAll(" ", "")

                        return (
                            <Fragment key={mob.plat}>
                                <Link href={`KendaraanDinas/PinjamMobil/${slug}`} scroll={false}>
                                    <CarCard name={mob.name} plat={mob.plat} img={mob.img} status={""} seksi={""} />
                                </Link>
                            </Fragment>
                        )
                    })
                }
            </GridMobil>
        </>

    )
}
