import { NextResponse } from "next/server";


export function middleware(request){
    return NextResponse.next();
}

export const config = {
    // custom filters for route
    matcher: "/news"
}