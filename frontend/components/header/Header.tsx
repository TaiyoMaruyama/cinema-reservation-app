'use client'

import type { HeaderProps } from '@/consts/header'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { Menu } from 'lucide-react'
import { Button } from '../shadcn/button'

const Header: React.FC<HeaderProps> = ({
  handleSidebarOpen,
  headerTitle,
  userName,
  // TODO:ログイン機能が実装されたときに使用
  setUserName,
}) => {
  return (
    <header className='h-14 w-full bg-red-900 flex items-center justify-between px-4'>
      <Button variant='outline' onClick={handleSidebarOpen}>
        <Menu className='text-white' />
      </Button>
      <h1 className='text-white font-bold text-xl'>{headerTitle}</h1>
      <Avatar>
        <AvatarFallback className='text-white'>{userName}</AvatarFallback>
      </Avatar>
    </header>
  )
}

export default Header
