import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import Connection from '@Connection';
import { getNIPbySession } from '@/app/feature/Auth/Login/api/CekSession/_function/getNIPbySession';
import { AmbilDataPegawaiDariJSONDirectory } from '@/app/feature/Auth/Login/api/Login/_function/function';
import KlasifikasiSeksiPegawai from '@/app/feature/Kepegawaian/_function/KlasifikasiSeksiPegawai';

export async function POST(request: NextRequest, response: NextResponse) {

    const ID_MOBIL = await request.json()
    const Kalender = cookies().get('kalender')?.value
    const NIP = await getNIPbySession()
    const DataPegawai = AmbilDataPegawaiDariJSONDirectory(NIP)
    const Peminjam = KlasifikasiSeksiPegawai(DataPegawai)


    let QuerySelect = 'INSERT INTO `tb_kendaraandinas_status` SET ?'
    let ValueAdd = {
        "STR_ID_KENDARAAN": ID_MOBIL,
        "STR_NIP9": NIP,
        "STR_PEMINJAM": Peminjam,
        "STR_TGL": Kalender,
        "STR_STATUS": "pinjam"
    }

    const dbconnection = Connection()
    await dbconnection.promise().query(QuerySelect, ValueAdd);
    dbconnection.end();


    console.log("DataPegawai", Peminjam)

    return NextResponse.json({ status: true })

}