import { NextResponse } from "next/server";
import { addProject, addProjectWithPreview } from "../prisma/addProject";

type RequestBody = {
    project: any,
    more: boolean
};

export async function POST(request: Request & { body: RequestBody }, response: Response) {
    try {
        const { project, more } = await request.json()
        if(!more){
            // const res = await addProject(project)
            return NextResponse.json({ message: 'Succesfully Added! 😎' , redirect: "/" }, { status: 200 });
        }else{
            // const res = await addProjectWithPreview(project)
            return NextResponse.json({ message: 'Succesfully Added! 😍' , redirect: "/" }, { status: 200 });
        }
    } catch (error) {
        console.error('Error processing password:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}