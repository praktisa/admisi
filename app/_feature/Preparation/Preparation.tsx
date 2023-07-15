'use client'
import React, { Fragment, useState } from 'react'
import Pre from './Preparation.module.css'
import { SimpanDataKepegawaian, UploadExcelKepegawaian, ViewDataKepegawaian } from '../Kepegawaian/Upload/DataPegawai'


export default function Preparation() {

    const [DataPegawai, setDataPegawai] = useState([])

    const Data: string[] = [
        'Kepegawaian',
        'Kendaraan Dinas',
        'Cendramata',
        'Keuangan',
        'Kepatuhan Internal'
    ]


    return (
        <>
            <div className={Pre['layout']}>

                <div className={Pre['layout__title']}>
                    <h1>Pembuatan Database Admisi</h1>
                </div>

                <div className={Pre['layout__card']}>

                    <div className={Pre['card__left']}>
                        <div className={`${Pre['card']} 
                            ${DataPegawai.length === 0 ? null : Pre['animate__card']}
                        `}>
                            <h3>Database yang belum tersedia</h3>
                            <ul >
                                {
                                    Data.map((dat, i) => {
                                        return (
                                            <Fragment key={i}>
                                                <li className={`${Pre['belum']}`} >{dat}</li>
                                            </Fragment>
                                        )
                                    })
                                }
                            </ul>

                            {
                                DataPegawai.length === 0
                                    ?
                                    <UploadExcelKepegawaian setState={setDataPegawai} />
                                    :
                                    <>
                                        <SimpanDataKepegawaian data={DataPegawai} />
                                    </>
                            }
                        </div>
                    </div>

                    <div className={Pre['card__right']}>
                        <div className={`
                        ${Pre['container__pegawai']} 
                        ${DataPegawai.length === 0 ? null : Pre['animate__pegawai']}
                        `}>

                            <div className={
                                `${Pre['pegawai']}
                                ${DataPegawai.length === 0 ? null : Pre['animate__pegawai2']}
                                    `} >
                                <ViewDataKepegawaian data={DataPegawai} />
                            </div>
                            <div className={Pre['summary']}>
                                <h3>Total Pegawai: {DataPegawai.length}</h3>
                                <div className={Pre['summary__batal']} onClick={() => setDataPegawai([])} >Batal</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
