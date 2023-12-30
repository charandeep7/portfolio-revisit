import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const cookieStore = cookies()
    const allowed = cookieStore.has('allowed')
    if (request.nextUrl.pathname.startsWith('/addproject')) {
        if (!allowed)
            return NextResponse.rewrite(new URL('/password', request.url))
        return NextResponse.rewrite(new URL('/addproject', request.url))
    }
}

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/addproject/:path*',
// }