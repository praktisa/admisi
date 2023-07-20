import { ReadFileJSON } from '@/app/_feature/Kepegawaian/Upload/CRUDJSON';
import { NextRequest, NextResponse } from 'next/server'

import { AmbilDataPegawaiDariJSON, CekNIP, TokenNIP, BuatSession, HapusSession } from './_function/function';



export async function POST(request: NextRequest, response: NextResponse) {

    const res = await request.json()
    let NIP: string = JSON.stringify(res)

    let DataPegawai: string = ReadFileJSON(`${process.env.DIRECTORY}`)
    let Result = AmbilDataPegawaiDariJSON(DataPegawai, NIP)

    let ApakahAda = Object.keys(Result).length



    if (ApakahAda > 0) {
        let Token_NIP = TokenNIP(NIP)
        let ApakahSudahLogin = await CekNIP(NIP)

        if (ApakahSudahLogin > 1 || ApakahSudahLogin === 1) {
            await HapusSession(NIP)
            await BuatSession(NIP, Token_NIP)

        } else {
            await BuatSession(NIP, Token_NIP)
        }

        return NextResponse.json({ registered: ApakahAda, token: Token_NIP })
    } else {
        return NextResponse.json({ registered: 0 })
    }


}

export async function GET(request: NextRequest, response: NextResponse) {



}