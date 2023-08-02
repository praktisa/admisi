

export default async function postPinjamMobil(BodyData: any) {
    let URL = `/feature/KendaraanDinas/Pinjam/api/postPinjamMobil`

    const res: any = await fetch(URL, {
        method: "POST",
        headers: {
            Authentication: 'KPPPratamaTabanan908'
        },
        body: JSON.stringify(BodyData)
    })


    if (!res.ok) {
        throw new Error('Gagal Pinjam Mobil')
    }

    return res.json()
}
