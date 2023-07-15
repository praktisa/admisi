export default async function GetPegawai() {
    const res = await fetch('http://0.0.0.0:3000/Admin/api/preparation', {
        method: "GET",
        cache: 'force-cache',
        next: { revalidate: 60 }
    })


    if (!res.ok) {

        throw new Error('Failed to fetch data')
    }

    return res.json()

}