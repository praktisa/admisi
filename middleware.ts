import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    let SessionUser = request.cookies.get('session')
    console.log("SessionUser", SessionUser)

    if (SessionUser === undefined) {
        return NextResponse.redirect(new URL('/Auth', request.url))
    }



}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/App/:path*'],
}