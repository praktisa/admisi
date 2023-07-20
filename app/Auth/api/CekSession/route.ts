import { ReadFileJSON } from '@/app/_feature/Kepegawaian/Upload/CRUDJSON';
import { NextRequest, NextResponse } from 'next/server'
import Connection from '@/app/_feature/Database/Connection';


export async function POST(request: NextRequest, response: NextResponse) {



}

export async function GET(request: NextRequest, response: NextResponse) {

    const { searchParams } = new URL(request.url)
    const session = searchParams.get('session')

    const dbconnection = Connection()

    let Query = 'SELECT COUNT(*) FROM `tb_session` WHERE `STR_Session` = ?'
    let result: any = await dbconnection.promise().query(Query, [session]);

    dbconnection.end();

    return NextResponse.json({ data: result[0][0]['COUNT(*)'] })
}