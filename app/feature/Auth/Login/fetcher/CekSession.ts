
import { redirect } from 'next/navigation'

export default async function CekSession(SessionUser: any) {

    const res = await fetch(`${process.env.HOST_URL}feature/Auth/Login/api/CekSession?session=${SessionUser}`, {
        method: "GET",
        headers: {
            Authentication: 'KPPPratamaTabanan908'
        },
        next: { revalidate: 60 }
    })

    if (!res.ok) {
        throw new Error('Session Gagal Dicek')
    }

    let ApakahAdaSession = await res.json()

    if (ApakahAdaSession.data === 0) {
        redirect('/Auth?SessionNotFound')
    }


    // return res.json()
}