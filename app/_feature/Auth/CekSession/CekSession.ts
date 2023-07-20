
export default async function CekSession(SessionUser: any) {

    const res = await fetch(`${process.env.HOST_URL}/Auth/api/CekSession?session=${SessionUser}`, {
        method: "GET",
        headers: {
            Authentication: 'KPPPratamaTabanan908'
        },

    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    console.log("RES", res)

    return res.json()
}