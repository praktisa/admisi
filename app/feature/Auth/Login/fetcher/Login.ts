
export default async function CekPegawaidanLogin(NIP: any) {


    const res = await fetch(`feature/Auth/Login/api/Login`, {
        method: "POST",
        headers: {
            Authentication: 'KPPPratamaTabanan908'
        },
        body: NIP
    })

    if (!res.ok) {

        throw new Error('Cek Pagawai GAGAL')
    }

    return res.json()

}