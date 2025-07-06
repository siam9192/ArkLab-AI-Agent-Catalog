import React from 'react'
import Container from '../container'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

function Header() {
  return (
 
      <header  className='py-5 border-b'>
       <Container>
        <div className='flex justify-between items-center'>
            {/* Logo */}
        <Link href='/'>
     <h1 className='text-4xl font-medium'>
      <span className='text-primary font-semibold'>Ai</span>Hub
       </h1>
        </Link>
        <div className='flex items-center gap-2 '>
            <img className='size-10 rounded-full' src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <p className='font-semibold'>Arafat Hasan </p>
            <ChevronDown />
            <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        </div>
        </div>
       </Container>
      </header>


  )
}

export default Header