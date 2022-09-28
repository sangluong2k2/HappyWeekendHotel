import React from 'react'
import { LayoutProps } from '../../models/layout'
import Footer from '../Footer'
import Header from '../Header'

type Props = {}

const SiteLayout = ({children}: LayoutProps) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default SiteLayout