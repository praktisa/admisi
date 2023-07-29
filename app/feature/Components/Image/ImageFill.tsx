import React from 'react'
import Image from 'next/image'
import IF from './ImageFill.module.css'

interface ImageFill_inter {
    src: string
}

export default function ImageFill({ src }: ImageFill_inter) {



    return (
        <>
            <Image
                src={`/KendaraanDinas/${src}.jpg`}
                fill
                className={IF['IMG']}
                alt={src}
                quality={60}
            />
        </>
    )
}
