"use client"

import { Fade} from 'react-awesome-reveal'

export function MyFade({
    children,
}: {
    children: React.ReactNode
}){
    return <Fade>{children} </Fade>
}
