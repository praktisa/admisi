import { CreateFileJSON, ReadFileJSON } from '@/app/_feature/Kepegawaian/Upload/CRUDJSON';
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs';

let Directory = "C:/next/admisi/app/_feature/Kepegawaian/Data/Pegawai.json"

export async function POST(request: NextRequest, response: NextResponse) {

    const res = await request.json()
    let Stringy_data = JSON.stringify(res)


    CreateFileJSON(Directory, Stringy_data)


    return NextResponse.json({ data: "Sukses Upload Data Pegawai" })
}




export async function GET(request: NextRequest, response: NextResponse) {

    let DataPegawai: string

    const { searchParams } = new URL(request.url)
    const option = searchParams.get('option')

    // sempurnakan ini
    if (fs.existsSync(Directory)) {
        if (option != 'cek') {
            DataPegawai = ReadFileJSON(Directory)
        } else {
            DataPegawai = "ada"
        }
    } else {
        DataPegawai = "tidak ada"
    }
    return NextResponse.json({ data: DataPegawai })

}