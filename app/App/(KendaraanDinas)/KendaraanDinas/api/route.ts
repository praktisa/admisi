import mysql from 'mysql2'
import { NextRequest, NextResponse } from 'next/server'
import { callbackify } from 'util'


interface inter__getKendaraanByPlat {
    host: string,
    database: string,
    port: string,
    socket: string,
    user: string,
    password: string
}

export async function GET(req: NextRequest, res: NextResponse) {

    let ASD: inter__getKendaraanByPlat = {
        host: "localhost",
        database: "db_admisi",
        port: "3307",
        socket: "",
        user: "root",
        password: ""

    }

    let Con: string = JSON.stringify(ASD)

    const dbconnection = mysql.createConnection(JSON.parse(Con));

    let QuerySelect = 'SELECT * FROM `tb_kendaraandinas`'
    let ASU: any = await dbconnection.promise().query(QuerySelect);


    dbconnection.end();
    // console.log("XXX", ASU[0])
    // asu sampai jam 2 pagi baru ketemu anjg !!!!!!

    return new NextResponse(JSON.stringify(ASU[0]));
}