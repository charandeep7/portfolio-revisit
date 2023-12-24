export default function Project({ params }: { params: { projectId: string } }){
    return <p>Project ID: {params.projectId}</p>
}