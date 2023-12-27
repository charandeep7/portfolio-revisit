import { NextResponse } from "next/server";

type RequestBody = {
    password: string;
};

export async function POST(request: Request & { body: RequestBody }, response: Response) {
    try {
        const { password } = await request.json()
        if(password !== process.env.UPLOAD_KEY){
            return NextResponse.json({message: 'Forbidden'},{status: 403})
        }
        return NextResponse.json({ message: 'Welcome Kitish! 😍' , redirect: "/addproject" }, { status: 200 });
    } catch (error) {
        console.error('Error processing password:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}