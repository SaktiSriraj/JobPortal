import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'



const Header = () => {
    return (
        <>
            <nav className='py-3 flex items-center justify-between'>
                <Link>
                    <img src="/logo.png" className='h-24' />
                </Link>

                    <SignedOut>
                        <Button variant="outline">
                            <SignInButton />
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
            </nav>
        </>
    )
}

export default Header