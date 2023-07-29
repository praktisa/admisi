

export default async function postPinjamMobil(BodyData: any) {
    let URL = `${process.env.HOST_URL}feature/KendaraanDinas/Pinjam/postPinjamMobil`

    const res: any = await fetch(URL, {
        method: "POST",
        headers: {
            Authentication: 'KPPPratamaTabanan908'
        },
        body: BodyData
    })


    if (!res.ok) {
        throw new Error('Gagal Mengambil Detil Kendaraan By Plat')
    }

    return res.json()
}
