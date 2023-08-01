
import Link from 'next/link'

export default function Home() {

  return (
    <>

      <h1>Dashboard Admisi</h1>

      <Link href={'/Kepegawaian'}>
        Kepegawaian
      </Link>

    </>
  )
}
