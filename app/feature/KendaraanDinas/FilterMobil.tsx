import React from 'react'
import Radio from '@Components/Radio/Radio'
import R from './FilterMobil.module.css'

interface GridMobil {
    children: React.ReactNode
}


export default function FilterMobil() {
    return (
        <>
            <div className={R['grid__filter']}>
                <Radio label="Tersedia" name='Filter' id="Tersedia" value='Tersedia' checked={true} />
                <Radio label="Terpinjam" name='Filter' id="Terpinjam" value='Terpinjam' checked={false} />
                <Radio label="Semua" name='Filter' id="Semua" value='Semua' checked={false} />
            </div>
        </>
    )
}

export function GridMobil({ children }: GridMobil) {
    return (
        <div className={R['grid__mobil']}>
            {children}
        </div>
    )
}