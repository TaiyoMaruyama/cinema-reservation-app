'use client'

import Header from '@/components/header/Header'
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
      <body className='w-full'>
        <Header
          handleSidebarOpen={() => alert('open')}
          headerTitle={String(metadata.title) || ''}
          userName='MT'
          setUserName={() => alert('setName')}
        />
        {children}
      </body>
    </html>
  )
}
