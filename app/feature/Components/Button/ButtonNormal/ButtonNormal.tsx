// 'use client'
import But from '@/app/feature/Components/Button/Button.module.css'

interface ButtonSubit_Inter {
    onClick: any,
    children: React.ReactNode
    warn: boolean
    success: boolean
}



export default function ButtonNormal({ onClick, children }: ButtonSubit_Inter) {



    return (
        <>
            <div className={But['layout']} >
                <button className={`
                ${But['display']} 
             
                 
                `} onClick={() => onClick()}>{children}  </button>
            </div>
        </>
    )
}
