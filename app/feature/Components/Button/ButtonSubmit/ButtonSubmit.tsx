// 'use client'
import But from '@/app/feature/Components/Button/Button.module.css'

interface ButtonSubit_Inter {
    onClick: any,
    children: React.ReactNode
    warn: boolean
    success: boolean
}



export default function ButtonClick({ onClick, children, warn, success }: ButtonSubit_Inter) {



    return (
        <>
            <div className={But['layout']} >
                <button className={`
                ${But['display']} 
                ${warn === true ? But['warn'] : null}
                 ${success === true ? But['success'] : null}
                 
                `} onClick={() => onClick()}>{children}  </button>
            </div>
        </>
    )
}
