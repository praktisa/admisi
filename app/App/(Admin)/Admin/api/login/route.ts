import { ReadFileJSON } from '@/app/feature/Kepegawaian/Upload/CRUDJSON';
import { NextRequest, NextResponse } from 'next/server'


export async function POST(request: NextRequest, response: NextResponse) {

    function AmbilDataPegawaiDariJSON(DataPegawai: any) {
        let JSON_DataPegawai = JSON.parse(DataPegawai)

        let Result: any = {}

        for (var i = 0; i < JSON_DataPegawai.length; i++) {
            let NIP_DataPegawai = JSON_DataPegawai[i]['IP Sikka'].replaceAll("'", "")
            if (NIP_DataPegawai === Stringy_data) {
                Result = JSON_DataPegawai[i]
            }
        }

        return Result
    }

    const res = await request.json()
    let Stringy_data = JSON.stringify(res)


    let DataPegawai: string = ReadFileJSON(`${process.env.DIRECTORY}`)
    let Result = AmbilDataPegawaiDariJSON(DataPegawai)



    return NextResponse.json({ data: Result })


}

export async function GET(request: NextRequest, response: NextResponse) {



}