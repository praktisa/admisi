
export const metadata = {
    title: 'Admisi | BMN',
    description: 'Kendaraan Dinas Negara',
}

interface ChildNode {
    children: React.ReactNode,
    modal: React.ReactNode
}

export default function KendaraanDinasLayout({ children, modal }: ChildNode) {

    // console.log("MODALLL", modal)
    return (
        <>
            {modal}

            {children}
        </>

    )
}
