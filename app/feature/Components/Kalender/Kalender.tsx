'use client'
import React, { useState, forwardRef, Fragment } from 'react'
import K from './Kalender.module.css'
import useCalendar from './_function/useCalendar'

const Kalender = forwardRef<HTMLInputElement | null>(({ }: any, ref) => {

    const [Terpilih, setTerpilih] = useState<string[]>([])

    const { CurrentDate, HeadCalendar, CreateCalendar, ChangeMonth } = useCalendar(new Date())


    function HeaderController({ head, next, before }: any) {

        return (
            <>
                <h1>{head}</h1>
                <div onClick={() => before()} className={K['arrow']} >&#8593;</div>
                <div onClick={() => next()} className={K['arrow']} >&#8595;</div>
                <div className={K['arrow']}  >&#x2715;</div>
            </>
        )
    }

    function Pilih(e: Event, id: string) {
        const { target } = e

        setTerpilih((target as HTMLInputElement).checked === true
            ? [...Terpilih, id]
            : Terpilih.filter(e => e !== id))

        if (ref != null) {
            ref.current = Terpilih
        }

    }

    return (
        <>
            <div className={K['layout']} >
                <div className={K['layout__header']}>
                    <HeaderController
                        head={HeadCalendar()}
                        next={() => ChangeMonth(1)}
                        before={() => ChangeMonth(-1)}
                    />
                </div>

                <div className={K['layout__tanggal']}>
                    <div>Min</div>
                    <div>Sen</div>
                    <div>Sel</div>
                    <div>Rab</div>
                    <div>Kam</div>
                    <div>Jum</div>
                    <div>Sab</div>

                    {
                        CreateCalendar().map((tangs, i) => {

                            let id = new Date(tangs).toString()
                            let Display = new Date(tangs).getDate()
                            let Sekarang = new Date().setHours(0, 0, 0, 0) === new Date(tangs).setHours(0, 0, 0, 0)

                            let Disable = new Date().setHours(0, 0, 0, 0) > new Date(tangs).setHours(0, 0, 0, 0)
                            let Disable_Style = Disable ? K['BedaBulan'] : null
                            let Klasifikasi_Tanggal = Terpilih.includes(id) ? K['terpilih'] : Sekarang ? K['HariIni'] : K['tidakTerpilih']
                            let CheckBox_Tanggal = Terpilih.includes(id) ? true : false
                            let Perbedaan_Bulan = new Date(tangs).getMonth() != CurrentDate.getMonth() ? K['BedaBulan'] : null


                            console.log("id", id, Sekarang)

                            return (
                                <Fragment key={id}>
                                    <div className={`${Perbedaan_Bulan}`} >
                                        <input
                                            id={id}
                                            type='checkbox'
                                            className={K['none']}
                                            checked={CheckBox_Tanggal}
                                            onChange={(e: any) => Pilih(e, id)}
                                            disabled={Disable}
                                        />
                                        <label
                                            htmlFor={id}
                                            className={`${K['tanggal__display']} ${Klasifikasi_Tanggal} ${Disable_Style}`}
                                        >
                                            {Display}
                                        </label>

                                    </div>
                                </Fragment>
                            )
                        })
                    }


                </div>
            </div>


        </>
    )
})

export default Kalender