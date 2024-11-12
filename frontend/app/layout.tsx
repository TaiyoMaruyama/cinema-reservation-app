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
      <body className='w-full flex flex-col items-center'>
        <Header
          handleSidebarOpen={() => alert('open')}
          headerTitle={String(metadata.title) || ''}
          userName='MT'
          setUserName={() => alert('setName')}
        />
        <div className='max-w-6xl w-full px-4 mx-auto'>{children}</div>
      </body>
    </html>
  )
}
