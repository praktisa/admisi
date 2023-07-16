import CekTabel from '@/app/_feature/Database/CekTabel';
import Connection from '@/app/_feature/Database/Connection';
import { CreateFileJSON } from '@/app/_feature/Kepegawaian/Upload/CreateFileJSON';
import { NextRequest, NextResponse } from 'next/server'


export async function POST(request: NextRequest, response: NextResponse) {

    const res = await request.json()
    let Stringy_data = JSON.stringify(res)
    let Directory = "C:/next/admisi/app/_feature/Kepegawaian/Data/Pegawai.json"
    CreateFileJSON(Directory, Stringy_data)


    const dbconnection = Connection()
    const Tabel = ['tb_kendaraandinas', 'tb_serviskendaaraandinas', 'tb_bmn', 'tb_permohonan']

    for (var i = 0; i < Tabel.length; i++) {

        try {
            await CekTabel(dbconnection, Tabel[i])
        } catch (error) {
            var sql = `CREATE TABLE ${Tabel[i]} (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nama VARCHAR(255) )`;
            await dbconnection.promise().query(sql);
        }
    }

    dbconnection.end();

    return NextResponse.json({ data: "SUCCESS" })
}

import fs from 'fs';


export async function GET(request: NextRequest, response: NextResponse) {

    let DataPegawai: string

    console.log("RESPON SUR", request)

    const path = 'C:/next/admisi/app/_feature/Kepegawaian/Data/Pegawai.json'

    if (fs.existsSync(path)) {
        // console.log("ADA")

        DataPegawai = fs.readFileSync(path, 'utf-8')


    } else {
        return NextResponse.json({ data: "tidak Ada" })
    }


    return NextResponse.json({ data: DataPegawai })

}