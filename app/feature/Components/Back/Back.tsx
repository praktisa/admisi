"use client";
import React from 'react'
import { useRouter } from "next/navigation";


export default function Back() {

    const router = useRouter();

    return (
        <span onClick={() => router.back()}>&#x2715;</span>
    )
}
