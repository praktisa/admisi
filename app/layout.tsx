import './globals.css'
import { Inter } from 'next/font/google'
// import { cookies } from 'next/headers'

// import Preparation from '@/app/feature/Preparation/Preparation'
// import GetPegawai from '@/app/feature/Kepegawaian/Data/GetPegawai'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admisi',
  description: 'Aplikasi Kepegawaian Terotomasi',
}

interface children {
  children: React.ReactNode
  Auth: React.ReactNode
}

export default async function RootLayout({ children, Auth }: children) {

  // const isPegawaiAssign = await GetPegawai("cek")


  return (
    <html lang="en">
      <body className={inter.className}>

        {Auth}
        {children}
      </body>
    </html>
  )
}
