

export const metadata = {
    title: 'Admisi | Kepegawaian',
    description: 'Aplikasi Kepegawaian Terotomasi',
}

interface ChildNode {
    children: React.ReactNode
}

export default function RootLayout({ children }: ChildNode) {


    return (
        <>
            <h1>Kepegawaian</h1>
            <div style={{ background: "red" }} >
                INI BAGIAN LAYOUT KEPEGAWAIAN
                <div>
                    {children}
                </div>

            </div>
        </>



    )
}
