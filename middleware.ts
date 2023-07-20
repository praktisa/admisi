import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import CekSession from './app/_feature/Auth/CekSession/CekSession'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    let NextUrl: string
    let SessionUser = request.cookies.get('session')



    if (!SessionUser) {
        NextUrl = "Auth?sesi"

    }



    let HasilCek: any = await CekSession(SessionUser?.value)
    let DatabaseSession = JSON.stringify(HasilCek.data)

    if (DatabaseSession === "1") {
        NextUrl = "Kepegawaian"
    } else {
        NextUrl = "Auth?DB"
    }

    return NextResponse.redirect(new URL('/' + NextUrl, request.url))

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/:path'],
}