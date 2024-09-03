import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'


const Header = () => {
  return (
    <>
        <nav className='py-3 flex items-center justify-between'>
            <Link>
                <img src="/logo.png" className='h-24' />
            </Link>
            
            <Button variant="outline">
                Login
            </Button>
        </nav>
    </>
  )
}

export default Header