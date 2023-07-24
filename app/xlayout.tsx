import './globals.css'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

import AppLayout from '../feature/Components/Layout/AppLayout'
import AuthModal from '../feature/Components/Modals/AuthModal/AuthModal'

import Preparation from '../feature/Preparation/Preparation'
import GetPegawai from '@/app/feature/Kepegawaian/Data/GetPegawai'



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

  let SessionUser = cookies().get('session')


  return (
    <html lang="en">
      <body className={inter.className}>

        {
          isPegawaiAssign.data === "tidak Ada"
            ?
            <Preparation />
            :
            SessionUser === undefined // ubah jadi intercepting
              // pelajaran >>>> untuk root layout usahakan plain tanpa komponen
              //  agar saat membuat intercepting route (posisi login aman dari navbar)
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
