import Connection from '@/app/_feature/Database/Connection';
import md5 from '@/app/_feature/Auth/md5'

export function AmbilDataPegawaiDariJSON(DataPegawai: any, NIP: string) {
    let JSON_DataPegawai = JSON.parse(DataPegawai)

    let Result: any = {}
    for (var i = 0; i < JSON_DataPegawai.length; i++) {
        let NIP_DataPegawai = JSON_DataPegawai[i]['IP Sikka'].replaceAll("'", "")
        if (NIP_DataPegawai === NIP) {
            Result = JSON_DataPegawai[i]
        }
    }
    return Result
}

export function TokenNIP(NIP: string) {
    let RandomNumber = Math.floor(Math.random() * 100)
    let MD5NIP = md5(NIP + RandomNumber)

    return MD5NIP
}

export async function CekNIP(NIP: string) {

    const dbconnection = Connection()
    let Query = 'SELECT COUNT(*) FROM `tb_session` WHERE `STR_NIP9` = ?'
    let result: any = await dbconnection.promise().query(Query, [NIP]);
    dbconnection.end();

    return result[0][0]['COUNT(*)']
}


export async function BuatSession(NIP: string, Token_NIP: string) {
    let QuerySelect = 'INSERT INTO `tb_session` SET ?'
    let ValueAdd = { "STR_Session": Token_NIP, "STR_NIP9": NIP }

    const dbconnection = Connection()
    await dbconnection.promise().query(QuerySelect, ValueAdd);
    dbconnection.end();
}

export async function HapusSession(NIP: string) {
    let QueryDELETE = 'DELETE FROM `tb_session` WHERE ?'
    let ValueDELETE = { "STR_NIP9": NIP }

    const dbconnection = Connection()
    await dbconnection.promise().query(QueryDELETE, ValueDELETE);
    dbconnection.end();
}



