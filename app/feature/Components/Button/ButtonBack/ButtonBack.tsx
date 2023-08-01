"use client";
import React, { useCallback } from 'react'
import But from '@Components/Button/Button.module.css'
import { useRouter } from 'next/navigation'

interface ButtonBack_Inter {
    children: React.ReactNode
}

export default function ButtonBack({ children }: ButtonBack_Inter) {

    const router = useRouter()
    const Kembali = useCallback(() => {
        router.back()
    }, [router])

    return (
        <span style={{ cursor: "pointer" }} onClick={() => Kembali()} >
            {children}
        </span>
    )
}
