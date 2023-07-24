
import React, { ReactNode } from 'react'

import M from './Modals.module.css'
import ButtonBack from '@Components/Button/ButtonBack/ButtonBack'


interface Inter__Modals {
    children: ReactNode
}

export default function Modals({ children }: Inter__Modals) {


    return (
        <>
            <div className={M['container']} >

                <div className={M['layout']} >
                    {/* <div className={M['layout__exit']} >
                        <ButtonBack>Kembali</ButtonBack>
                    </div> */}

                    <div className={M['layout__content']} >
                        {children}
                    </div>

                </div>

            </div>
        </>
    )
}
