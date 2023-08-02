import { NextRequest, NextResponse } from 'next/server'

import Connection from '@Connection';


export async function GET(request: NextRequest, response: NextResponse) {

    const { searchParams } = new URL(request.url)
    const dk = searchParams.get('dk')

    const dbconnection = Connection()
    let Select = "STR_PEMINJAM, STR_TGL, STR_STATUS"
    let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas_status` WHERE `STR_ID_KENDARAAN` = ?'
    let result: any = await dbconnection.promise().query(Query, [dk]);

    dbconnection.end();


    console.log("DK", result[0])

    return NextResponse.json({ data: result[0] })

}