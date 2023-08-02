import Blur from "@feature/Components/Modals/BasicModal/Blur/Blur"
import ModalContainer from "@feature/Components/Modals/BasicModal/Container/Container"

export const metadata = {
    title: 'Admisi | Pinjam Mobil',
    description: 'Pinjam Mobil',
}

interface ChildNode {
    children: React.ReactNode,

}

export default function PinjamMobilLayout({ children }: ChildNode) {
    return (

        <Blur>
            <ModalContainer>
                {children}
            </ModalContainer>
        </Blur>

    )
}
