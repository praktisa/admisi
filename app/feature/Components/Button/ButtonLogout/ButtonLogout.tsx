'use client'
import React from 'react'
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'



export default function ButtonLogout() {
    const router = useRouter()

    function Logout() {
        deleteCookie("session", { path: '/', domain: 'localhost' });
        router.push('/Auth')
    }

    return (
        <div onClick={() => Logout()} >⇽ Keluar</div>
    )
}
