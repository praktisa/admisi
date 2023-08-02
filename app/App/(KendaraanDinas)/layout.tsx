import SubmenuContain from "@/app/feature/Components/Navigation/Submenu/SubmenuContain"



export const metadata = {
    title: 'Admisi | BMN',
    description: 'Kendaraan Dinas Milik Negara',
}

interface ChildNode {
    children: React.ReactNode,
    modal: React.ReactNode
}

export default function KendaraanDinasRootLayout({ children }: ChildNode) {


    return (
        <>

            <h1>Kendaraan Dinas</h1>

            {/* <SubmenuContain /> */}
            {children}


        </>

    )
}
