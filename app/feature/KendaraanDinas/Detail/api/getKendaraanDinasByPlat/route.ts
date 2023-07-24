import { NextRequest, NextResponse } from 'next/server'
import Connection from '@Connection';

export async function GET(request: NextRequest, response: NextResponse) {

    const { searchParams } = new URL(request.url)
    const dk = searchParams.get('dk')

    const dbconnection = Connection()
    let Select = "str_nama, str_plat, str_img, date_servis"
    let Query = 'SELECT ' + Select + ' FROM `tb_kendaraandinas` WHERE `id` = ?'
    let result: any = await dbconnection.promise().query(Query, [dk]);

    dbconnection.end();



    return NextResponse.json({ data: result[0][0] })

}