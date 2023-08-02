

export default async function getTerpinjamMobil(dk: any) {
    let URL = `${process.env.HOST_URL}feature/KendaraanDinas/Pinjam/api/getTerpinjamMobil?dk=${dk}`

    const res: any = await fetch(URL, {
        method: "GET",
        headers: {
            Authentication: 'KPPPratamaTabanan908'
        },
        // body: JSON.stringify(dk)
    })


    if (!res.ok) {
        throw new Error('Gagal Ambil Mobil Terpinjam Pada Plat ' + dk)
    }

    return res.json()
}
