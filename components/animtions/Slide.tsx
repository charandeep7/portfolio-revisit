"use client"

import { Slide} from 'react-awesome-reveal'

export default function MySlide({
    children
}: {
    children: React.ReactNode
}){
    return <Slide direction='up'>{children} </Slide>
}