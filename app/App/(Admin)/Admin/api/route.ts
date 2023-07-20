import CekTabel from '@/app/feature/_Database/CekTabel';
import Connection from '@/app/feature/_Database/Connection';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {

    const dbconnection = Connection()
    const Tabel = "tb_datapegawai"

    try {

        let Result: any = await CekTabel(dbconnection, Tabel)
        dbconnection.end();
        console.log("MAWSUKKK", Result)

        return NextResponse.json({ data: Result })



    } catch (error: any) {

        var sql = `CREATE TABLE ${Tabel} (name VARCHAR(255), address VARCHAR(255))`;
        dbconnection.end();
        return NextResponse.json({ data: "error" })
    }





    // return new NextResponse("error");
    // return NextResponse.json({ data: "error" })


}