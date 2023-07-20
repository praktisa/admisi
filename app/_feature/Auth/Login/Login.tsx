'use client'
import React, { useRef, useState } from 'react'
import BasicInput from '@/app/_feature/Components/Input/Basic/BasicInput'
import ButtonClick from '@/app/_feature/Components/Button/ButtonSubmit/ButtonSubmit'
import CekPegawai from './CekPegawaidanLogin'
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'

export default function Login() {
    const refNIP = useRef<null | HTMLInputElement>(null)

    const [M, setM] = useState("Masuk")
    const router = useRouter()

    async function CekNIP() {

        if (refNIP.current?.value.length != 0) {

            setM("Proses")
            let Hasil = await CekPegawai(refNIP.current?.value)
            if (Hasil.registered > 0) {
                setM("Sukses 😁")
                setCookie("session", Hasil.token)

                router.refresh()

            } else {
                setM("NIP Tidak Ditemukan")
                setTimeout(() => {
                    setM("Masuk")
                }, 1000)
            }

        } else {
            setM("NIP Kosong")

            setTimeout(() => {
                setM("Masuk")
            }, 1000)
        }


    }


    return (
        <>
            <BasicInput
                type="text"
                inputMode="numeric"
                ref={refNIP}
                label={"NIP 9 digit"}
                placeholder={'123456789'}
                maxLength="9"
                disabled={M === "Proses" ? true : false}
                onKeyDown={M === "Proses" ? null : CekNIP}
            />

            <ButtonClick
                onClick={() => { M === "Proses" ? null : CekNIP() }}
                warn={M === "NIP Tidak Ditemukan" ? true : false}
                success={M === "Sukses 😁" ? true : false}
            >
                {M}
            </ButtonClick>
        </>
    )
}
