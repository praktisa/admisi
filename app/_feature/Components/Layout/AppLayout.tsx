import React, { ReactNode } from 'react'
import AL from './AppLayout.module.css'
import Navigation from '@/app/_feature/Components/Navigation/Navigation'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={AL['layout']} >
        <div className={AL['layout__navigation']} >
          <Navigation />
        </div>
        <div className={AL['layout__main']} >{children}</div>
      </div>
    </>
  )
}
