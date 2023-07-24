import React from 'react'
import AM from './AuthModal.module.css'
import Login from '@/app/feature/Auth/Login/Login'

export default function AuthModal() {
    return (
        <>
            <div className={AM['container']}>
                <div className={AM['layout']} >
                    <span className={AM['head']} >Admisi</span>
                    <div className={AM['form']} >
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}
