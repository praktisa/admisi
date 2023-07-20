'use client';
import Reac, { useState } from 'react'
import But from '@/app/_feature/Components/Button/Button.module.css'

interface ButtonSubit_Inter {
    onClick: any,
    children: React.ReactNode
}



export default function ButtonClick({ onClick, children }: ButtonSubit_Inter) {

    const [load, setLoad] = useState(false)

    return (
        <>
            <div className={But['layout']} >
                <button className={But['display']} onClick={() => onClick()}>{children}  </button>
            </div>
        </>
    )
}
