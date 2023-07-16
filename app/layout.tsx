import Preparation from './_feature/Preparation/Preparation'
import AppLayout from './_feature/Components/Layout/AppLayout'
import './globals.css'
import { Inter } from 'next/font/google'
import GetPegawai from '@/app/_feature/Kepegawaian/Data/GetPegawai'
import AuthModal from './_feature/Components/Modals/AuthModal/AuthModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admisi',
  description: 'Aplikasi Kepegawaian Terotomasi',
}

interface children {
  children: React.ReactNode
}

export default async function RootLayout({ children }: children) {

  const isPegawaiAssign = await GetPegawai("cek")
  const isLogin: string = "belum"



  return (
    <html lang="en">
      <body className={inter.className}>

        {
          isPegawaiAssign.data === "tidak Ada"
            ?
            <Preparation />
            :
            isLogin === "belum"
              ?
              <AuthModal />
              :
              <AppLayout>
                {children}
              </AppLayout>

        }


      </body>
    </html>
  )
}
