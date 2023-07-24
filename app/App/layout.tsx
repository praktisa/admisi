
import AppLayout from '../feature/Components/Layout/AppLayout'
import CekSession from '@/app/feature/Auth/Login/fetcher/CekSession'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Admisi',
  description: 'Aplikasi Kepegawaian Terotomasi',
}

interface children {
  children: React.ReactNode

}

export default async function AppRootLayout({ children }: children) {


  // cek session ini dilakukan ketika user melakukan proses saja
  // let SessionUser = cookies().get('session')
  // await CekSession(SessionUser?.value)



  return (

    <AppLayout>
      {children}
    </AppLayout>

  )
}
