
export default async function getKendaraanByPlat(dk: string) {

    let URL = `${process.env.HOST_URL}feature/KendaraanDinas/Detail/api/getKendaraanDinasByPlat?dk=${dk}`

    const res: any = await fetch(URL, {
        method: "GET",
        headers: {
            Authentication: 'KPPPratamaTabanan908'
        },
        next: { revalidate: 300 }
    })


    if (!res.ok) {
        throw new Error('Gagal Mengambil Detil Kendaraan By Plat')
    }

    return res.json()
}