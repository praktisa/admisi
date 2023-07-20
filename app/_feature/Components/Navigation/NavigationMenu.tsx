'use client'
import React, { Fragment } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import NM from './NavigationMenu.module.css'

export default function NavigationMenu() {

    let Data: string[] = [
        'Dashboard',
        'Kepegawaian',
        'Kendaraan Dinas',
        'Barang Milik Negara',
        'Keuangan', // admin
        'Kepatuhan' // admin
    ]

    const segment = useSelectedLayoutSegment() as string

    return (
        <ul>
            {
                Data.map((menu: string, i: number) => {

                    let link: string = menu.replaceAll(" ", "")
                    let selected: boolean = false

                    if (segment != null && segment.includes(link)) {
                        selected = true
                    }

                    return (
                        <Fragment key={menu}>
                            <Link href={`/${link}`} >
                                <li className={`${selected === true ? NM['selected'] : NM['notSelected']}`} >
                                    {menu}
                                </li>
                            </Link>
                        </Fragment>
                    )
                })
            }

        </ul >
    )
}
