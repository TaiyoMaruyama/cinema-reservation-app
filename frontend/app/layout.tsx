'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { metadata } from '@/consts/meta'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <head>
        <meta name='description' content={metadata.description || ''} />
      </head>
      <body className='w-full flex flex-col items-center'>
        <Header
          handleSidebarOpen={() => alert('open')}
          headerTitle={String(metadata.title) || ''}
          userName='MT'
          setUserName={() => alert('setName')}
        />
        <div className='max-w-6xl w-full min-h-screen px-4 mx-auto'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
