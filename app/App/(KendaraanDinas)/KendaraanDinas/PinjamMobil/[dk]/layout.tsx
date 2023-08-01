import Shimerloading from "@/app/feature/Components/loading/Shimerloading"

export const metadata = {
    title: 'Admisi | Pinjam Mobil',
    description: 'Pinjam Mobil',
}

interface ChildNode {
    children: React.ReactNode,

}

export default function PinjamMobilLayout({ children }: ChildNode) {
    return (
        <>
            {/* <Shimerloading loop={1} /> */}
            {children}
        </>
    )
}
