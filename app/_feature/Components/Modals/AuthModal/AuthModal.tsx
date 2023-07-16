import React from 'react'
import AM from './AuthModal.module.css'
import BasicInput from '../../Input/BasicInput'
import Login from '@/app/_feature/Auth/Login'

export default function AuthModal() {
    return (
        <>
            <div className={AM['container']}>
                <div className={AM['layout']} >
                    <h1>Admisi | Login</h1>

                    <div className={AM['form']} >
                        <Login />
                    </div>

                </div>
            </div>
        </>
    )
}
