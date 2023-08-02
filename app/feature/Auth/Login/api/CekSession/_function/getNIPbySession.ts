import Connection from '@Connection';
import { cookies } from 'next/headers'


export async function getNIPbySession() {

    let Session = cookies().get('session')?.value

    const dbconnection = Connection()
    let Query = 'SELECT STR_NIP9 FROM `tb_session` WHERE `STR_Session` = ?'
    let result: any = await dbconnection.promise().query(Query, [Session]);
    dbconnection.end();

    return result[0][0]['STR_NIP9']
}