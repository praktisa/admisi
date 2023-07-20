
export default async function CekPegawaidanLogin(NIP: any) {


    const res = await fetch(`/Auth/api/Login`, {
        method: "POST",
        headers: {
            Authentication: 'KPPPratamaTabanan908'
        },
        body: NIP
    })

    if (!res.ok) {

        throw new Error('Failed to fetch data')
    }

    return res.json()

}