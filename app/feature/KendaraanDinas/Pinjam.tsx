import React from 'react'
import KD from './Pinjam.module.css'

interface inter_dk {
    dk: string
}

export default function Pinjam({ dk }: inter_dk) {
    return (
        <>
            <div
                className={`
                    ${KD['Card__Selection']} 
                    ${KD['show']}
                `}
            >
                <div className={`${KD['Selection__Content']}`} >
                    <div className={KD['Content__img']} id={"slideKalender"} >
                        <div className={`${KD['Slide__front']}`} >
                            {/* <Image
                              src={`/KendaraanDinas/${Data.img}.jpg`}
                              width={492}
                              height={472}
                              style={{ objectFit: "cover", display: "block" }}
                              alt={Data.name}
                              quality={100}

                          /> */}
                        </div>


                        <div className={`${KD['Slide__Kalender']}`} id={"Kalender"}  >
                            {/* <Kalender
                              onClose={() => ShowSlider("slideKalender", false)}
                              ref={DateRef}

                          /> */}
                        </div>
                    </div>

                    <div className={KD['Content__info']}>
                        <div className={KD['Content__head']}>
                            <div className={KD['name']} >NAMAAA</div>
                            <div className={KD['plat']} >{dk}</div>
                            <div
                                className={KD['exit']}
                            // onClick={() => setShowCardSelection(false, Data)}
                            >&#x2715;
                            </div>
                        </div>

                        <div className={KD['Content__body']}>
                            <div className={KD['body__wrap__top']}>
                                <div className={KD['body__wrap']}>
                                    <label className={KD['label']} htmlFor="tujuan">Tanggal</label>
                                    <span className={KD['body__date']}
                                    // onClick={() => {
                                    //     ShowSlider("slideKalender", true)
                                    // }}
                                    >
                                        Pilih
                                    </span>
                                </div>

                                <div className={KD['body__wrap']}>
                                    <label className={KD['label']} htmlFor="pinjam">NIP (Pendek)</label>
                                    <div>
                                        <input className={KD['pinjam']} list="NIP" id="pinjam" type='number' maxLength={9} />

                                        <datalist id="NIP">
                                            <option value="815101523" />
                                            <option value="815101904" />
                                            <option value="815155110" />
                                        </datalist>

                                    </div>
                                </div>
                            </div>


                            <div className={KD['body__wrap']}>
                                <label className={KD['label']} htmlFor="tujuan">Tujuan Peminjaman</label>
                                <div>
                                    <textarea className={KD['body__tujuan']} id="tujuan" rows={8} cols={45} placeholder={`Tujuan Pengunaan  ...`} ></textarea>
                                </div>

                            </div>



                        </div>

                        <div className={KD['Content__foot']}>
                            <div className={KD['foot_button']} placeholder="0" >Pinjam</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
