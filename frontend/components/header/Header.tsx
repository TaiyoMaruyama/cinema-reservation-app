import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { Menu } from 'lucide-react'
import { Button } from '../shadcn/button'

const Header = () => {
  return (
    <header className='h-14 w-full bg-red-900 flex items-center justify-between px-8'>
      <Button variant='outline'>
        <Menu className='text-white' />
      </Button>
      <h1 className='text-white font-bold text-xl'>シネマ予約</h1>
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  )
}

export default Header
