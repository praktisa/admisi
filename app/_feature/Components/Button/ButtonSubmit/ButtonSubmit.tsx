'use client';
import React from 'react'
import But from '@/app/_feature/Components/Button/Button.module.css'

interface ButtonSubit_Inter {
    onSubmit: any,
    children: React.ReactNode
}

export default function ButtonSubmit({ onSubmit, children }: ButtonSubit_Inter) {
    return (
        <>
            <div className={But['layout']} >
                <button className={But['display']} onClick={() => onSubmit()}>{children}</button>
            </div>
        </>
    )
}
