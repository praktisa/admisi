import Preparation from './_feature/Preparation/Preparation'
import AppLayout from './_feature/Components/Layout/AppLayout'
import './globals.css'
import { Inter } from 'next/font/google'
import GetPegawai from '@/app/_feature/Kepegawaian/Data/GetPegawai'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admisi',
  description: 'Aplikasi Kepegawaian Terotomasi',
}

interface children {
  children: React.ReactNode
}

export default async function RootLayout({ children }: children) {

  const WEE = await GetPegawai()

  console.log("WE APASIH", WEE)

  return (
    <html lang="en">
      <body className={inter.className}>

        {
          WEE.data === "tidak Ada"
            ?
            <Preparation />
            :
            <AppLayout>
              {children}
            </AppLayout>
        }


      </body>
    </html>
  )
}
